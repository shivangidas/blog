import React, { useState, useEffect } from "react";
import Bio from "./components/Bio";
import PostLink from "./components/PostLink";
import linksCollection from "./linksCollection";

function Links() {
  const [search, setSearch] = useState("");
  const [filteredLinks, setFilteredLinks] = useState([]);
  useEffect(() => {
    setFilteredLinks(
      linksCollection.filter(link => {
        return (
          link.description.toLowerCase().includes(search.toLowerCase()) ||
          link.name.toLowerCase().includes(search.toLowerCase())
        );
      })
    );
  }, [search]);

  const links = filteredLinks.map(item => (
    <PostLink
      key={item.link}
      name={item.name}
      link={item.link}
      date={item.date}
      description={item.description}
      icon={item.icon}
    ></PostLink>
  ));
  return (
    <section>
      <Bio />
      <div className="search-box">
        <label>Search </label>
        <input
          type="text"
          placeholder="e.g. Review"
          onChange={e => setSearch(e.target.value)}
        />{" "}
        {/* <input
          type="text"
          placeholder="by title"
          onChange={e => setSearch(e.target.value)}
        /> */}
      </div>
      <div>{links}</div>
    </section>
  );
}
export default Links;
