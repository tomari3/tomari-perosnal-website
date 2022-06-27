import React from "react";

export const Project = ({ name, images, code, demo, desc, stack }) => {
  images = images?.map((img) => {
    return (
      <div className="img">
        <img src={img} alt={name} />
      </div>
    );
  });

  stack = stack?.map((tech) => {
    return <span>{tech}</span>;
  });

  return (
    <article className="project">
      <div className="header">{name}</div>
      <div className="images">{images}</div>
      <div className="info">
        <div className="description">
          <p>{desc}</p>
        </div>
        <div className="tech-stack">{stack}</div>
        <div className="links">
          <a
            className={!demo && "none"}
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
          >
            demo
          </a>
          <a href={code} target="_blank" rel="noopener noreferrer">
            code
          </a>
        </div>
      </div>
    </article>
  );
};
