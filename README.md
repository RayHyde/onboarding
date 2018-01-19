<h1>Onboarding</h1>
<h2>a responsive "what's new" mini slide show</h2>
<p>To tell your users what the (newest) features in your web app are, you use a mini slide show called an "onboarding". Often marketing comes up with the goods when everything else is already finished and ready to go. This script injects itself into your project's first page.</p>

<p>See it in action: <a href="https://rayhyde.github.io/onboarding/">rayhyde.github.io/onboarding</a></p>
<p>This onboarding mini slide show is easy to change. It has all the text of the slides in a single Javascript object at the beginning of the script. Changing the CSS is a little harder as it is injected minimized into the &lt;head&gt; of the page. But if you are a frontender worth your salt, this should be easy for you.</p>
<p>The user can check a box to indicate he does not want to see the onboarding again. This sets a cookie so we are sure it's not shown on that device anymore.</p>
<p>The script is a two-stage rocket. You add the tiny stage 1 script to your page, which just checks if there is no cookie present that indicates that the user does not want to see the show again. If there is no cookie, then the full script is injected into the &lt;head&gt; of the page. This stage 2 script carries the full payload of HTML, CSS and jQuery for your onboarding slide show.</p>
<p>A very good article that explains the do's and don'ts of good onboarding is <a href="https://www.smashingmagazine.com/2014/08/mobile-onboarding-beginners-guide/">done by the guys at Smashing Magazine.</a></p>
<p>The script you download from Github immediately fires the onboarding and sets the cookie if you close it, so be careful. To give you an idea of what we're discussing here, you can click the button to show the onboarding. The checkbox does not actually work so it does not set a cookie. </p>

<h4>Welcome to my playground</h4>
<p>This project is part of my Playground - a collection of fun (and dare I say it: clever) stuff I made in the past, from jQuery games and plugins to CSS animation tricks.</p>
<p>Please drop in on my portfolio site <a href="http://www.rayhyde.nl">www.rayhyde.nl</a>!</p>
