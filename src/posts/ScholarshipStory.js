import React, { Component } from "react";
import PostFooter from "../components/PostFooter";
class Post extends Component {
  render() {
    return (
      <>
        <h1>Scholarship Story</h1>
        <small>June 11th, 2019</small>

        <article>
          <p>
            If you are here, most probably I gave you a link to this. Following is the list of scholarships I applied to in 2018-19, and one I didn't apply for but won anyway. 
          </p>
          <hr />
          <h3>Scholarships</h3>
          <ul>
            <li>
              The{" "}
              <a
                href="https://www.chevening.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chevening Scholarship
              </a>{" "}
              : It is fully funded. Applies to universities in UK. Duration: one year. Application starts in August.
            </li>
            <li>
              The{" "}
              <a
                href="https://ec.europa.eu/programmes/erasmus-plus/opportunities/individuals/students/erasmus-mundus-joint-master-degrees_en"
                target="_blank"
                rel="noopener noreferrer"
              >
                Erasmus Mundus Scholarship
              </a>{" "}
              : Again fully funded. This is by the European Council and comes with a list of subjects that are taught by 2-3 universities jointly. Duration: two years. Application starts by September/October depending on participating universities.
            </li>
            <li>
              <a
                href="https://apply.stipendiumhungaricum.hu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Stipendium Hungaricum
              </a>{" "}
              : Fully funded. Applies to universities in Hungary. Duration: two years. Application starts around December.</li>
            <li>
              <a
                href="http://cscuk.dfid.gov.uk/apply/masters-scholarships/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Commonwealth Master’s Scholarships
              </a>{" "}
              : You'll have to research this.
            </li>
            <li>
              <a
                href="https://www.uva.nl/en/education/master-s/scholarships--tuition/scholarships-and-loans/amsterdam-excellence-scholarship/amsterdam-excellence-scholarship.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                University of Amsterdam
              </a>{" "}
              : Full scholarships are available but with certain restrictions. Applications start early in September/October.
            </li>
            <li>
              <a
                href="https://www.britishcouncil.in/study-uk/scholarships/70th-anniversary-scholarship"
                target="_blank"
                rel="noopener noreferrer"
              >
                British Council India Scholarship
              </a>{" "} for women in STEM
              : Full scholarship for UK universities. I wasn't aware of it till two of the Universities I had applied to under the above scholarships nominated me for it. Happy side-effect of making an effort.
            </li>
          </ul>      
        </article>
        <PostFooter />
      </>
    );
  }
}

export default Post;
