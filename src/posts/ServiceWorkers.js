import React, { Component } from "react";
import PostFooter from "../components/PostFooter";
class Post extends Component {
  render() {
    return (
      <>
        <h1>Service Worker Resources</h1>
        <small>April 6, 2019</small>

        <article>
          <p>
            You might have come across Progressive Web App (PWA) or heard
            Offline-first development. Even if you haven't, well, welcome! Let
            me tell you.
          </p>
          <hr />
          <h3>Resources</h3>
          <ul>
            <li>
              The{" "}
              <a
                href="https://developers.google.com/web/fundamentals/primers/service-workers/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google docs
              </a>{" "}
              explain it best. Highly recommend going there instead of my trials
              and tribulations here.
            </li>
          </ul>
          <hr />
          <h3>First Encounter</h3>
          <p>
            I have learnt so much because of using <code>create-react-app</code>
            . This environment has an option to register for Service workers
            which led me to find out what they were to begin with. Service
            worker is a script that moderates between your app, the browser and
            the network. This allows one to cache resources and use them instead
            of making multiple requests to fetch every time. However, its most
            fascinating application is when the internet is not there at all.
            Normally, we come across the T-rex, Downasaur (yes, that is its
            name). Since there is a service worker in between the browser and
            the internet cosily caching all the resources you asked for, it goes
            ahead and serves them. And your site runs offline!
          </p>
          <hr />
          <h3>Initial frustration</h3>
          <p>
            All was good, till I discovered new additions to my site were not
            showing up at all. Worked in incognito mode{" "}
            <code>(CTRL + SHIFT + N)</code> only. Turns out once a service
            worker is registered, it keeps serving the cached pages till all
            instances (tabs) of the website/app are closed. Not refreshed,
            closed! <br />
            From the docs, I came across the fact the if there was a change in
            the serviceWorker.js file, it would tell the browser about the new
            service worker and allow fetching the resources again. However, when
            the new service worker is registered, the old one continues to work
            and is only replaced on refreshing the page. <br />
            There are ways to let the users know about this. Refer{" "}
            <a
              href="https://github.com/shivangidas/blog/blob/master/src/serviceWorker.js"
              target="_blank"
              rel="noopener noreferrer"
            >
              my code
            </a>{" "}
            for more info.
          </p>
          <hr />
          <h3>Happy Side-effects</h3>
          <p>
            Service worker satisfies one of the{" "}
            <a
              href="https://developers.google.com/web/progressive-web-apps/checklist"
              target="_blank"
              rel="noopener noreferrer"
            >
              conditions
            </a>{" "}
            to allow users to add the site to their home screen on phone and
            desktop. This means your website can run like a native app (almost)
            with the heavy lifting being done by the underlying OS.
          </p>
          <hr />
          <h3>Verdict</h3>
          <p>
            I love that my blog feels like a native app, too, and runs smoothly
            in bad connection. Now we are supporting 'no internet'. What's next
            in store?
          </p>
        </article>
        <PostFooter />
      </>
    );
  }
}

export default Post;
