import React, { Component } from "react";
import PostFooter from "../components/PostFooter";
import Code from "../components/code";
class Post extends Component {
    render() {
        let signalCode = 'const count: WritableSignal<number> = signal(0);\nconst doubleCount: Signal<number> = computed(() => count() * 2);';
        return (
            <>
                <h1>What's new in Angular 18</h1>
                <small>July 18, 2024</small>

                <article>
                    <p>
                        ...plus things I rediscovered.</p>

                    <hr />
                    <h3>The documentation</h3>
                    <p>
                        I remember crying over how awful the Angular docs were and am so relieved that they have changed it now in version 18. Look at <a
                            href="https://angular.dev/"
                            target="_blank"
                            rel="noopener noreferrer"
                        > this
                        </a>. Way better in terms of content and UI. The Learn Angular section and the API reference, everything is better.
                    </p>
                    <hr />

                    <h3>Deferrable views</h3>
                    <p>
                        I found this very exciting. Having to block the entire page with a loading icon while some things took time has bothered me in previous projects and this feature changes that. With <code>@defer</code>, <code>@placeholder</code>, <code>@loading</code> one can easily load different sections at different times without blocking the page. Especially helpful in case an API takes long to fetch data or there’s some complex calculation. <a
                            href="https://angular.dev/tutorials/learn-angular/10-deferrable-views"
                            target="_blank"
                            rel="noopener noreferrer"
                        > Refer this
                        </a>.
                        </p>
                    <hr />
                    <h3>Image optimizations</h3>
                    <p>Handle image optimizations automatically with <code>NgOptimizedImage</code>.</p>
                    <hr />
                    <h3>inject()</h3>
                    <p>For Dependency Injection, <code>@Injectable</code> was there to make a service or resource injectable but <code>inject()</code> is new. Use inject function to inject the injectable into the component 😁. Previously you would import the service and pass it in the constructor of the component.
                    </p>
                    <hr />
                    <h3>Signals</h3>
                    <p>
                        This is again super exciting because Signals provide a way for easy state management. It is a wrapper around a value that notifies interested consumers when that value changes.
                    </p>
                    <p>Writable signal - values can be set and updated directly<br />
                        Computed signal - read-only signal that depends on other signals.</p>
                    <Code codeString={signalCode} language="language-javascript" />
                    <hr />
                    <h3>Conclusion</h3>
                    <p>These new changes are helpful and I think I'm finally, after a year of working with Angular, starting to enjoy using it.</p>
                </article>
                <PostFooter />
            </>
        );
    }
}

export default Post;
