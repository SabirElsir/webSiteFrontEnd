import React, { useState, useEffect, useRef } from "react";
import "../styles/Carousel.css";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [items, setItems] = useState([
    {
      img: "../images/img1.jpg",
      author: "LUNDEV",
      title: "DESIGN SLIDER",
      topic: "ANIMAL",
      des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?",
    },
    {
      img: "../images/img2.jpg",
      author: "LUNDEV",
      title: "DESIGN SLIDER",
      topic: "ANIMAL",
      des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?",
    },
    {
      img: "../images/img3.jpg",
      author: "LUNDEV",
      title: "DESIGN SLIDER",
      topic: "ANIMAL",
      des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?",
    },
    {
      img: "../images/img4.jpg",
      author: "LUNDEV",
      title: "DESIGN SLIDER",
      topic: "ANIMAL",
      des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?",
    },
  ]);

  const carouselRef = useRef(null);
  const listRef = useRef(null);
  const thumbnailRef = useRef(null);
  const timeRef = useRef(null);
  const nextRef = useRef(null);
  const prevRef = useRef(null);
  const timeRunning = 3000;
  const timeAutoNext = 7000;
  let runTimeOut;
  let runNextAuto;

  const showSlider = (type) => {
    const list = listRef.current;
    const thumbnails = thumbnailRef.current;
    const items = list.querySelectorAll(".item");
    const thumbnailItems = thumbnails.querySelectorAll(".item");

    if (type === "next") {
      list.appendChild(items[0]);
      thumbnails.appendChild(thumbnailItems[0]);
      carouselRef.current.classList.add("next");
    } else {
      list.prepend(items[items.length - 1]);
      thumbnails.prepend(thumbnailItems[thumbnailItems.length - 1]);
      carouselRef.current.classList.add("prev");
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
      carouselRef.current.classList.remove("next");
      carouselRef.current.classList.remove("prev");
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
      nextRef.current.click();
    }, timeAutoNext);
  };

  useEffect(() => {
    runNextAuto = setTimeout(() => {
      nextRef.current.click();
    }, timeAutoNext);

    return () => {
      clearTimeout(runTimeOut);
      clearTimeout(runNextAuto);
    };
  }, []);

  return (
    <div className="carousel" ref={carouselRef}>
      <div className="list" ref={listRef}>
        {items.map((item, index) => (
          <div
            key={index}
            className={`item ${index === currentIndex ? "active" : ""}`}
          >
            <img src={item.img} alt={item.title} />
            <div className="content">
              <div className="author">{item.author}</div>
              <div className="title">{item.title}</div>
              <div className="topic">{item.topic}</div>
              <div className="des">{item.des}</div>
              <div className="buttons">
                <button>SEE MORE</button>
                <button>SUBSCRIBE</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="thumbnail" ref={thumbnailRef}>
        {items.map((item, index) => (
          <div
            key={index}
            className="item"
            onClick={() => setCurrentIndex(index)}
          >
            <img src={item.img} alt={item.title} />
            <div className="content">
              <div className="title">{item.title}</div>
              <div className="description">{item.topic}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="arrows">
        <button id="prev" ref={prevRef} onClick={() => showSlider("prev")}>
          &lt;
        </button>
        <button id="next" ref={nextRef} onClick={() => showSlider("next")}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
