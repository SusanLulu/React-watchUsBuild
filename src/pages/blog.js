import React from 'react';
import CommentBox from '../components/comment-box';

export default class BlogPage extends React.Component {
  render() {
    return (
      <div>
        <div className="cell">
          <article className="article">
            <h1 className="article-title">Lorem Ipsum</h1>
            <div className="article-body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam maximus turpis nec tortor gravida finibus. Sed id metus in ipsum pulvinar congue at ut tellus. Sed ultricies luctus ex sed fermentum. Curabitur elementum ultricies felis tincidunt vehicula. Sed ornare imperdiet tristique. Nullam volutpat urna erat, ac convallis tortor feugiat vitae. Proin eu egestas ex, eu ullamcorper purus. Pellentesque laoreet at magna sit amet posuere. Nulla ac quam ac justo congue tincidunt. In est justo, elementum et commodo quis, luctus sed lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non lorem scelerisque, dapibus neque eget, cursus ipsum. Pellentesque varius tempor est, vel fringilla felis lobortis id.
              </p>
              <blockquote>
                Nullam quis lobortis quam. Curabitur accumsan neque purus. Fusce elementum laoreet tristique. Duis lacus dui, mattis ac sollicitudin nec, ornare sed libero. Aliquam erat volutpat. Vestibulum sodales tellus ac ante faucibus dignissim. Duis hendrerit, dolor quis aliquet sodales, felis tortor gravida tortor, et pulvinar est justo a dolor. Mauris gravida pharetra dui sollicitudin ullamcorper. Ut nec ipsum sapien. Nam pellentesque mi ut nibh rutrum, sit amet tempor velit tincidunt. Fusce fermentum gravida velit id ultricies. Ut pretium mauris orci, id sodales turpis lacinia eget.
              </blockquote>
              <p>
                TPhasellus egestas sapien at finibus hendrerit. Ut sed maximus odio. Mauris iaculis lectus ligula, in rhoncus neque ultricies sed. Mauris eget odio at purus rutrum tempor. Pellentesque vehicula egestas est, eget tempus augue. Pellentesque in placerat quam. Pellentesque fringilla dignissim urna a feugiat. Duis tempor et enim tempus ultrices. Donec non orci ante. Sed libero mauris, euismod eget ullamcorper at, molestie facilisis metus. Morbi porttitor lobortis urna id aliquet.
              </p>
            </div>
          </article>
        </div>

        <CommentBox apiUrl="api/blog/comments.json" />
      </div>
    )
  }
}
