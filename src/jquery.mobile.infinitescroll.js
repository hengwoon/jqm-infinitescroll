/**
 * infinite scroll plugin. 
 * 
 * @author Heng Woon Ong <https://github.com/hengwoon>
 * @copyright Oodle Inc. 2012
 * @version 0.1
 * 
 * Usage: create a div with data-role="infinitescroll" at the bottom of the page. Params:
 * 		data-url: the url to fetch the next 'page'
 * 		data-response-role: the data-role of the page that contains the new results
 * 		data-loading-text: the loading text that displays when the ajax call is being made.
 * 		data-params: params (http querystring, or json array) that gets passed to the ajax call
 * 		data-type: 'get' or 'post' - method type for ajax call
 * 		data-threshold: percent of page height the user must scroll to in order to perform ajax call. defaults to 0.99
 * 
 * The new response should contain another <div data-role="infinitescroll" .....></div> if there are to be more pages to be scrolled.
 * 
 * 
 */

(function($, undefined) {
	
	$.widget("mobile.infinitescroll", $.mobile.widget, {
		options: {
			'url': '',
			'response-role': 'infinitescroll-page',
			'loading-text': 'Loading...',
			'params': '',
			'type': 'get',
			'threshold': 0.99,
			'max-pages': 20
		},
		
		_isLoading: false,

		_create: function()
		{
			var self = this,
				o = self.options,
				$el = self.element;
			
			$el.addClass('ui-infinitescroll');
		},
		
		_init: function()
		{
			var self = this,
				o = self.options,
				$el = self.element,
				currentPage = self.element.closest(":jqmData(role='page')");
			
			var scrollID = 'iscr' + ++$.mobile.infinitescroll._index;
			
			if (!o.url) return false;
			
			var onScrollStop = function() {
				if ($.mobile.infinitescroll.ignoreScroll) return;
				
				var currentPage = self.element.closest(":jqmData(role='page').ui-page-active");
				
				var scrollThreshold = -$(window).height();
				
				if (currentPage.length)
				{
					currentPage.children(':visible').each(function() {
						scrollThreshold += $(this).height();
					});
				}
				else
				{
					return false;
				}
				
				scrollThreshold = scrollThreshold  * parseFloat(o.threshold);
				
				if ($(document).scrollTop() < scrollThreshold) return false;
				
				if (self._isLoading) return false;
				
				self._showLoading();
				
				$(window).off('scrollstop.'+scrollID);
				
				if (o.params)
				{
					var params = o.params;
				}
				
				var pagesScrolled = currentPage.data('page-scrolled');
				
				if (!pagesScrolled) pagesScrolled = 0;
				
				if (pagesScrolled >= o['max-pages'])
				{
					return false;
				}
				
				currentPage.data('page-scrolled', ++pagesScrolled);
				
				$.mobile.loadPage(o.url, {role: o['response-role'], data: params, type: o['type']})
					.done(function(url, options, newPage, dupCachedPage) {						
						var $pageDiv;
						
						$pageDiv = $('<div class="infinitescroll-page" />');
						$(":jqmData(role='content')", newPage).first().children().appendTo($pageDiv);
						$pageDiv.appendTo($el.closest(":jqmData(role='content')"));
						
						$(document).trigger('pagechange', { toPage: $pageDiv, options: options });

						self.element.remove();
						
						$(newPage).remove();
						
						$(window).trigger('throttledresize');
					});
			};
			
			$(window).on('scrollstop.'+scrollID, onScrollStop);
			$(document).one('pagechange', function() {
				$(window).off('scrollstop.'+scrollID);
			});
		},
		
		_showLoading: function()
		{
			this._isLoading = true;
			
			this.element.append('<span class="ui-icon ui-icon-loading"></span>');
			if (this.options['loading-text'])
			{
				this.element.append('<span class="ui-loading-text">' + this.options['loading-text'] + '</span>');
			}
		}

	});
	
	$.mobile.infinitescroll.ignoreScroll = false;
	$.mobile.infinitescroll._index = 0;
	
	//auto self-init widgets
	$(document)
		.on("pagechange", function(e, data)
		{
			$(":jqmData(role='infinitescroll')", data.toPage).infinitescroll();
		});
})(jQuery);