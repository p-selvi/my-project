import React from 'react';
import '../style/GridShowcase.css';

const GridShowcase = () => {
  return (
    <section className="grid-showcase">
      <div className="container">
        <h2>Our Features</h2>

        <div className="two-column-layout">
          <div className="column">
            <p>This is the first paragraph under the first column. Here, you can describe the first feature or offer. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem praesentium, accusamus quis adipisci magnam iusto ipsam odio itaque unde nemo iure, assumenda repudiandae, eaque similique quod laborum excepturi dolores omnis fuga nobis labore molestias corporis tenetur! Quo, nemo quae nam rem pariatur unde laudantium, accusantium placeat, veritatis doloremque nisi eaque?</p>
          </div>
          <div className="column">
            <p>This is the second paragraph under the second column. Here, you can describe the second feature or offer. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis temporibus, sunt doloremque cum pariatur consequuntur possimus non laborum? Eligendi perspiciatis consequuntur distinctio esse tenetur dignissimos labore minus numquam. Illo sed veniam fugit eaque maiores mollitia eveniet doloremque consequatur. Eligendi, quis natus laborum aut harum autem minima iusto unde laudantium quibusdam?</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GridShowcase;
