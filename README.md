jquery-scrolltop-button
=======================

jquery-scrolltop-button is a super lightweight and simple JQuery plugin that displays a Scroll to Top button that when a user scrolls down the screen.  The button is designed to lay over the top of any existing content, and provides the user an easy way to scroll back to the top of the page.  This is useful for pages that contain large amounts of content that stretch the page down and especially useful for users on mobile devices.

<h2>Requirements</h2>
<ul>
    <li>Jquery must be loaded.</li>
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
	z-index:199;
	font-weight:bold;
}
&#60;/style&#62;
<p><em>The styles included are default styles for the scoll button that pops up.  You may modify this to make it more custom to your site if you wish such as changing the offsets from the viewport edges. It is important that you keep the position:fixed and z-index to a relatively high index so it sits atop any potential content.</em></p>

<p>Initialize and bind to the CSS class you used above on page ready:</p>
<pre><code>$(document).ready(function() { 
  $(".livepreview").livePreview();
});
</code></pre>
