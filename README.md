jquery-scrolltop-button
=======================

jquery-scrolltop-button is a super lightweight and simple JQuery plugin that displays a Scroll-To-Top button that when a user scrolls byeond the initial top fold of the screen.  The button is designed to lay over the top of any existing content, and provides the user an easy way to scroll back to the top of the page.  This is useful for pages that contain large amounts of content that stretch the page down and especially useful for users on mobile devices.

<h2>Requirements</h2>
<ul>
    <li>Jquery must be preloaded.</li>
</ul>

<h2>Usage</h2>
<p>Add the jquery-scrolltop-button plugin script to your &#60;head&#62; tag or before the closing &#60;body&#62; tag:</p> 
<pre><code>&#60;script type="text/javascript" src="/js/jquery-scrolltop-button.1.0.0.js"&#62;&#60;/script&#62;
</code></pre>
<p>* Please note the version number</p>
<p>Make sure to add the CSS styling for the jquery-scrolltop-button in your head or css file:</p>
<pre><code>
&#60;style&#62;
.scrollTop-btn {
	background-color:rgba(0,0,0,0.4);
	color:#fff;
	position:fixed;
	bottom:30px;
	right:10px;
	padding:10px 15px 6px 15px;
	border-radius:3px;
	z-index:999;
	font-weight:bold;
}
&#60;/style&#62;
</code></pre>
<p><em>The styles included are default styles for the scoll button that pops up.  You may modify this to make it more custom to your site if you wish such as changing the offsets from the viewport edges or if it appears on the left or right side, top or bottom. Note: it is important that you keep the "position:fixed" and "z-index:999" or to a relatively high index so it sits atop any potential content you may have on the page.</em></p>

<p>Initialize and bind to the DOM window that is being scrolled. <strong>99% of the time, you will want to bind it to your "body" tag</strong>, but in some cases, you may have another DOM element that you wish to bind the scrolling in:</p>
<pre><code>$(document).ready(function() { 
  $("body").addScrollTop();
});
</code></pre>

<p>That's it.  Anytime you scroll down from the top offset (20px is default), the scroll to top button will appear at the bottom right of the screen for you.</p>

<h2>Configuring</h2>
<p>There are two <i>optional</i> configurable options on initialization :</p>
<pre><code>$("body").addScrollTop({
    topOffset: 20,
    buttonInner: '&amp;#94;' 
});</code></pre>


<ul>
    <li><strong>topOffset</strong> :: offset from top before showing button, numeric value only in pixels, default = 20</li>
    <li><strong>buttonInner</strong> :: button's inner content,  default = '&amp;#94;' (html entity for ^)</li>
</ul>
