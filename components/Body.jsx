import image from "/src/assets/bc.jpg";

function Body() {
  return (
    <>
      <div className="body-container">
        <div className="body-img">
          <img src={image} alt="" />
        </div>
        <div className="body-info">
          <h3>Think Health. Think Massage.</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias
            eligendi, magnam esse natus incidunt quod consectetur adipisci
            numquam sed delectus, unde labore ipsam iusto nihil, repellat
            laborum blanditiis debitis cum.
          </p>
          <button>Learn More About Us</button>
          <button>Contact Us Today</button>
        </div>
        <div className="body-content">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
            veritatis dignissimos explicabo illo, inventore, culpa temporibus,
            doloribus ex quidem adipisci sit quia dolores dolorum dolor
            voluptate provident totam ratione. Beatae ullam dolorum adipisci,
            inventore iure obcaecati earum quos quas quo.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            alias distinctio necessitatibus, placeat maiores totam. Deserunt
            magni iusto architecto temporibus eos expedita voluptate fugiat,
            fuga sed officia assumenda, tenetur tempore explicabo. Ipsum
            blanditiis quia temporibus accusantium? Obcaecati maiores
            necessitatibus accusamus quam officia incidunt, omnis assumenda.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
            at quia repudiandae tempore exercitationem cum nesciunt explicabo
            similique numquam sunt pariatur libero vitae, rem minus quos
            dolorum. Necessitatibus est magnam ex aut, eveniet quo doloribus
            cupiditate similique, obcaecati nesciunt officiis?
          </p>

          <hr />
        </div>
        <div className="body-bottom">
            <h3>Family Wellness Massage Therapy</h3>
            <p>9876 Main Street, Suite 123, Mainland, ML12345</p>
            <p>Phone: 9876543210</p>
        </div>
      </div>
    </>
  );
}
export default Body;