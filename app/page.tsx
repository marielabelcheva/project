/* eslint-disable @next/next/no-img-element */

export default function Home() {
  return (
    <div>
      <div className="cover">
        <h1 className="title">Pastry shop</h1>
      </div>

      <div className="columns">
        <div className="column-half">
          <img className="image" src="/Logo.png" alt="Logo" />
        </div>
        <div className="column-half">
          <h2 className="section-title">Introduction</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis
            reiciendis alias saepe nam atque molestias, perspiciatis itaque, ad
            perferendis minus odio laborum dolore, aliquid natus non quia
            debitis at omnis!
          </p>
        </div>
        </div>

        <div className="container">
        <h2 className="section-title">Our clients</h2>
        <div className="card-container">
          <div className="card">
            <img className="avatar" src="/avatar.png" alt="avatar" />
            <h3 className="card-name">Name</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
              pariatur ullam aliquid inventore nam, eligendi unde, obcaecati hic
              minima perferendis numquam. Aliquam esse non possimus mollitia,
              quisquam atque! Explicabo, hic?
            </p>
          </div>
          <div className="card">
            <img className="avatar" src="/avatar.png" alt="avatar" />
            <h3 className="card-name">Name</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
              pariatur ullam aliquid inventore nam, eligendi unde, obcaecati hic
              minima perferendis numquam. Aliquam esse non possimus mollitia,
              quisquam atque! Explicabo, hic?
            </p>
          </div>
          <div className="card">
            <img className="avatar" src="/avatar.png" alt="avatar" />
            <h3 className="card-name">Name</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
              pariatur ullam aliquid inventore nam, eligendi unde, obcaecati hic
              minima perferendis numquam. Aliquam esse non possimus mollitia,
              quisquam atque! Explicabo, hic?
            </p>
          </div>
          <div className="card">
            <img className="avatar" src="/avatar.png" alt="avatar" />
            <h3 className="card-name">Name</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
              pariatur ullam aliquid inventore nam, eligendi unde, obcaecati hic
              minima perferendis numquam. Aliquam esse non possimus mollitia,
              quisquam atque! Explicabo, hic?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
