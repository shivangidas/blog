import React, { Component } from "react";
import PostFooter from "../components/PostFooter";
class Post extends Component {
    render() {

        return (
            <>
                <h1>We don't break the internet</h1>
                <small>July 28, 2024</small>

                <article>
                    <p> Reviving an old <a
                        href="https://www.shivangidas.com/Website"
                        target="_blank"
                        rel="noopener noreferrer"
                    > portfolio website
                    </a> I made in 2016.
                    </p>

                    <hr />
                    <h3>Background</h3>
                    <p>
                        A lot of mistakes/quirks in JavaScript will never be fixed because 'we don't break the internet', i.e. JavaScript is backward compatible<superscript>*</superscript>. Anything made in 2016 or even 2000 should still work. I decided to revive a website I coded when I was still new to web development. It is an online resume, it holds the things I was learning back then, even some Machine Learning experiments. 😁
                    </p>
                    <hr />

                    <h3>Expectation</h3>
                    <p>
                        When I built this website I had hosted it on a paid platform and then on the free version of Heroku, and some years later the domain died because I stopped paying. Today I planned on moving it to GitHub pages. I expected the only things I would need to change are the links and expose the index.html file, but not have to touch the JavaScript or Angular.js code. (Yes, I have used angular.js in this website, yes I don't remember it.)
                    </p>
                    <hr />
                    <h3>Reality</h3>
                    <p>What I ended up changing and why:
                        <ul>
                            <li>Moved index.html to root folder so GitHub Actions can pick it up.</li>
                            <li>Updated any mention to old domain links to file folder path.</li>
                            <li>Updated any http to https as Chrome was throwing error for the Bootstrap CDN links and not rendering the styles.</li>
                            <li>Removed <code>center</code> used in a few places as it is deprecated, changed to use CSS style <code>text-align: center</code> Haven't changed it everywhere because couldn't be bothered just yet.</li>
                            <li>Removed footer and navigation from the first page because it was not in the same folder now and therefore not displaying. There is a call to action link available so it felt okay to remove navigation instead of moving all the files out of the folder. I might change that later.</li>
                        </ul>
                        As expected I did not have to change any JavaScript! The icons I had used from icomoon are not working but that is for another time. Some links to other projects require moving them to Github pages which I'll do next. Code <a
                            href="https://github.com/shivangidas/Website"
                            target="_blank"
                            rel="noopener noreferrer"
                        > available here
                    </a>.
                    </p>
                    <hr />
                    <h3>Nostalgia</h3>
                    <p>It is wild to see how much my interests have changed and evolved since 2016. I am a way better developer now but can see how the inefficient choices I made would have worked for me then. I have moved to the UK since and worked in 4 different companies, which makes me want to update the resume section. I think I'll let it be though, frozen in time.</p>
                    <hr />
                    <p><superscript>*</superscript>A github repository full of <a
                        href="https://github.com/denysdovhan/wtfjs"
                        target="_blank"
                        rel="noopener noreferrer"
                    > Javascript quirks
                    </a></p>
                </article>
                <PostFooter />
            </>
        );
    }
}

export default Post;
