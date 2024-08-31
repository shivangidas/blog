import React, { Component } from "react";
import PostFooter from "../components/PostFooter";
class Post extends Component {
    render() {
        let channelCode = 'v, ok := <- ch';
        return (
            <>
                <h1>Go Gotchas</h1>
                <small>August 26, 2024</small>

                <article>
                    <p>
                        Learning Go/GoLang the hard way. When you have ADHD and you're trying to remember things for longer than your working memory allows - you make notes. Very likely to forget when required but now I have quick notes to refer to.
                    </p>

                    <hr />
                    <h3>Everything I forgot while working on a project.</h3>
                    <ul>
                        <li>
                            Capitalise variables and functions to export - <code>Coffee</code> can be exported but <code>coffee</code> cannot.
                        </li>
                        <li>Folder names become module/package names.</li>
                        <li><code>go build</code> for building code and <code>go run</code> complies and runs program.</li>
                        <li>
                            Type comes after the variable name- <code>foo int</code>
                        </li>
                        <li>
                            <code>:=</code> short assignment statement.
                        </li>
                        <li>
                            <code>var</code> is used for untyped variables. <code>const</code> for constants.
                        </li>
                        <li>
                            <code>type(v)</code> for type conversion- <code>int(”123”)</code>
                        </li>
                        <li>I/O operations using fmt package <code>Printf</code>, <code>Println</code>, <code>Scanln</code> and also bufio package.</li>
                        <li>Each character is a rune in Go. Unicode character format %#U will print the unicode.</li>
                        <li>A defer statement defers the execution of a function until the surrounding function returns.</li>
                        <li>Go has pointers but no pointer arithmetic</li>
                        <li>Go copies values when you pass them to functions/methods, so if you're writing a function that needs to mutate state you'll need it to take a pointer to the thing you want to change.</li>
                        <li><code>struct</code> can store multiple data types.</li>
                        <li>Method is a function with a receiver (type). They are bound together. Interface is like a wrapping around multiple methods.</li>
                        <li>arrays - immutable, slices- mutable array slice, map- dictionary. Use <code>make(map[keyType]valueType)</code></li>
                        <li>use <code>append</code> to append to a slice</li>
                        <li>
                            <code>for i, v := range slice</code> -for looping over a slice i-index, v -value
                        </li>
                        <li>Go functions may be closures and can return multiple values</li>
                        <li>Variadic functions can be called with any number of trailing arguments</li>
                        <li>A goroutine is a lightweight thread managed by the Go runtime. Deal with many tasks at once, not necessarily parallel. Anything returned by the goroutine function is ignored.</li>
                        <li>Use concurrency when you want to combine data from multiple operations that can operate independently.</li>
                        <li>Channels are the pipes that connect concurrent goroutines.</li>
                        <li>One goroutine won't both read and write to the same channel as things can be read once and that would not be helpful</li>
                        <li>Also, a goroutine waits after writing to a channel for another goroutine to read from it, so there should be at least two goroutines running concurrently</li>
                        <li><code>close(ch)</code> - close the channel. not always required unless a goroutine is waiting for it to close like when using for range. Responsibility to close lies with the goroutine writing to the channel</li>
                        <li>Buffered channel <code>ch := make(chan int, 10)</code>  it allows 10 writes without blocking</li>
                        <li><code>cap(ch)</code> - would tell the capacity of the buffered channel</li>
                        <li><code>len(ch)</code> - would tell the number of values in the channel</li>
                        <li><code>{channelCode}</code> ok == true means the channel is open, false means closed</li>
                        <li>select statement - handle multiple channel operations randomly, without prioritizing one and starving others</li>
                        <li>Use <code>for</code> to run the select multiple times, but provide a way to break out.</li>
                        <li>APIs should not expose any concurrency logic with channels or mutexes</li>
                        <li>Avoid goroutine leaks by specifying how the goroutine exists. Use context.</li>
                        <li>Share memory by communicating; do not communicate by sharing memory.</li>
                        <li>Before go 1.22, the for loops would use the same value and index and if a goroutine closure is using the values it would not work as expected. Now, there is a new copy in each for loop so the closure works.</li>
                    </ul>
                    <hr />
                    <h3>Resources I liked</h3>
                    <ul>
                        <li>
                            <a
                            href="https://quii.gitbook.io/learn-go-with-tests"
                            target="_blank"
                            rel="noopener noreferrer"
                        > Learn Go with tests.
                        </a> Test driven development. Testing in Go is  quite nice.
                        </li>
                        <li>
                            <a
                            href="https://learning.oreilly.com/library/view/learning-go-2nd/9781098139285/"
                            target="_blank"
                            rel="noopener noreferrer"
                            > Learning Go.
                            </a> This book has a good concurrency explanation and why you may not need it.
                        </li>
                        <li>
                            <a
                            href="https://gobyexample.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        > Go by example
                        </a>
                        </li>
                    </ul>
                </article>
                <PostFooter />
            </>
        );
    }
}

export default Post;
