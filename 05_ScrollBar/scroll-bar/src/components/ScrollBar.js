import React from "react";
import "./ScrollBar.css";

const ScrollBar = () => {
  const pageHeight = document.getElementsByClassName("section").clientHeight;
  console.log(`page height: ${pageHeight}`);

  var progress = document.getElementsByClassName("progressbar");
  var totalHeight = document.body.scrollHeight - window.innerHeight;
  console.log(`scroll height: ${document.body.scrollHeight}`);
  console.log(`inner height: ${window.innerHeight}`);
  console.log(`total height: ${totalHeight}`);
  console.log(`y offset: ${window.pageYOffset}`);
  var scroll = 0;
  window.onscroll = () => {
    var progressHeight = (window.pageYOffset / totalHeight) * 100;
    scroll = progressHeight + "%";
    // console.log(scroll);
  };
  return (
    <div className="section">
      <div className="progressbar" style={{ height: "15%" }}></div>
      <div className="scrollPath"></div>
      <div className="section">
        <h1>Create Scroll Progress Bar</h1>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition, injected humour, or non-characteristic words
          etc.There are many variations of passages of Lorem Ipsum available,
          but the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition, injected humour, or non-characteristic words
          etc.There are many variations of passages of Lorem Ipsum available,
          but the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition, injected humour, or non-characteristic words
          etc.There are many variations of passages of Lorem Ipsum available,
          but the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition, injected humour, or non-characteristic words
          etc.There are many variations of passages of Lorem Ipsum available,
          but the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition, injected humour, or non-characteristic words
          etc.There are many variations of passages of Lorem Ipsum available,
          but the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition, injected humour, or non-characteristic words
          etc.There are many variations of passages of Lorem Ipsum available,
          but the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition, injected humour, or non-characteristic words
          etc.generators on the Internet tend to repeat predefined chunks as
          necessary, making this the first true generator on the Internet. It
          uses a dictionary of over 200 Latin words, combined with a handful of
          model sentence structures, to generate Lorem Ipsum which looks
          reasonable. The generated Lorem Ipsum is therefore always free from
          repetition, injected humour, or non-characteristic words etc.There are
          many variations of passages of Lorem Ipsum available, but the majority
          have suffered alteration in some form, by injected humour, or
          randomised words which don't look even slightly believable. If you are
          going to use a passage of Lorem Ipsum, you need to be sure there isn't
          anything embarrassing hidden in the middle of text. All the Lorem
          Ipsum generators on the Internet tend to repeat predefined chunks as
          necessary, making this the first true generator on the Internet. It
          uses a dictionary of over 200 Latin words, combined with a handful of
          model sentence structures, to generate Lorem Ipsum which looks
          reasonable. The generated Lorem Ipsum is therefore always free from
          repetition, injected humour, or non-characteristic words etc.There are
          many variations of passages of Lorem Ipsum available, but the majority
          have suffered alteration in some form, by injected humour, or
          randomised words which don't look even slightly believable. If you are
          going to use a passage of Lorem Ipsum, you need to be sure there isn't
          anything embarrassing hidden in the middle of text. All the Lorem
          Ipsum generators on the Internet tend to repeat predefined chunks as
          necessary, making this the first true generator on the Internet. It
          uses a dictionary of over 200 Latin words, combined with a handful of
          model sentence structures, to generate Lorem Ipsum which looks
          reasonable. The generated Lorem Ipsum is therefore always free from
          repetition, injected humour, or non-characteristic words etc.There are
          many variations of passages of Lorem Ipsum available, but the majority
          have suffered alteration in some form, by injected humour, or
          randomised words which don't look even slightly believable. If you are
          going to use a passage of Lorem Ipsum, you need to be sure there isn't
          anything embarrassing hidden in the middle of text. All the Lorem
          Ipsum generators on the Internet tend to repeat predefined chunks as
          necessary, making this the first true generator on the Internet. It
          uses a dictionary of over 200 Latin words, combined with a handful of
          model sentence structures, to generate Lorem Ipsum which looks
          reasonable. The generated Lorem Ipsum is therefore always free from
          repetition, injected humour, or non-characteristic words etc.There are
          many variations of passages of Lorem Ipsum available, but the majority
          have suffered alteration in some form, by injected humour, or
          randomised words which don't look even slightly believable. If you are
          going to use a passage of Lorem Ipsum, you need to be sure there isn't
          anything embarrassing hidden in the middle of text. All the Lorem
          Ipsum generators on the Internet tend to repeat predefined chunks as
          necessary, making this the first true generator on the Internet. It
          uses a dictionary of over 200 Latin words, combined with a handful of
          model sentence structures, to generate Lorem Ipsum which looks
          reasonable. The generated Lorem Ipsum is therefore always free from
          repetition, injected humour, or non-characteristic words etc.There are
          many variations of passages of Lorem Ipsum available, but the majority
          have suffered alteration in some form, by injected humour, or
          randomised words which don't look even slightly believable. If you are
          going to use a passage of Lorem Ipsum, you need to be sure there isn't
          anything embarrassing hidden in the middle of text. All the Lorem
          Ipsum generators on the Internet tend to repeat predefined chunks as
          necessary, making this the first true generator on the Internet. It
          uses a dictionary of over 200 Latin words, combined with a handful of
          model sentence structures, to generate Lorem Ipsum which looks
          reasonable. The generated Lorem Ipsum is therefore always free from
          repetition, injected humour, or non-characteristic words etc.There are
          many variations of passages of Lorem Ipsum available, but the majority
          have suffered alteration in some form, by injected humour, or
          randomised words which don't look even slightly believable. If you are
          going to use a passage of Lorem Ipsum, you need to be sure there isn't
          anything embarrassing hidden in the middle of text. All the Lorem
          Ipsum generators on the Internet tend to repeat predefined chunks as
          necessary, making this the first true generator on the Internet. It
          uses a dictionary of over 200 Latin words, combined with a handful of
          model sentence structures, to generate Lorem Ipsum which looks
          reasonable. The generated Lorem Ipsum is therefore always free from
          repetition, injected humour, or non-characteristic words
          etc.generators on the Internet tend to repeat predefined chunks as
          necessary, making this the first true generator on the Internet. It
          uses a dictionary of over 200 Latin words, combined with a handful of
          model sentence structures, to generate Lorem Ipsum which looks
          reasonable. The generated Lorem Ipsum is therefore always free from
          repetition, injected humour, or non-characteristic words etc.There are
          many variations of passages of Lorem Ipsum available, but the majority
          have suffered alteration in some form, by injected humour, or
          randomised words which don't look even slightly believable. If you are
          going to use a passage of Lorem Ipsum, you need to be sure there isn't
          anything embarrassing hidden in the middle of text. All the Lorem
          Ipsum generators on the Internet tend to repeat predefined chunks as
          necessary, making this the first true generator on the Internet. It
          uses a dictionary of over 200 Latin words, combined with a handful of
          model sentence structures, to generate Lorem Ipsum which looks
          reasonable. The generated Lorem Ipsum is therefore always free from
          repetition, injected humour, or non-characteristic words etc.There are
          many variations of passages of Lorem Ipsum available, but the majority
          have suffered alteration in some form, by injected humour, or
          randomised words which don't look even slightly believable. If you are
          going to use a passage of Lorem Ipsum, you need to be sure there isn't
          anything embarrassing hidden in the middle of text. All the Lorem
          Ipsum generators on the Internet tend to repeat predefined chunks as
          necessary, making this the first true generator on the Internet. It
          uses a dictionary of over 200 Latin words, combined with a handful of
          model sentence structures, to generate Lorem Ipsum which looks
          reasonable. The generated Lorem Ipsum is therefore always free from
          repetition, injected humour, or non-characteristic words etc.There are
          many variations of passages of Lorem Ipsum available, but the majority
          have suffered alteration in some form, by injected humour, or
          randomised words which don't look even slightly believable. If you are
          going to use a passage of Lorem Ipsum, you need to be sure there isn't
          anything embarrassing hidden in the middle of text. All the Lorem
          Ipsum generators on the Internet tend to repeat predefined chunks as
          necessary, making this the first true generator on the Internet. It
          uses a dictionary of over 200 Latin words, combined with a handful of
          model sentence structures, to generate Lorem Ipsum which looks
          reasonable. The generated Lorem Ipsum is therefore always free from
          repetition, injected humour, or non-characteristic words etc.There are
          many variations of passages of Lorem Ipsum available, but the majority
          have suffered alteration in some form, by injected humour, or
          randomised words which don't look even slightly believable. If you are
          going to use a passage of Lorem Ipsum, you need to be sure there isn't
          anything embarrassing hidden in the middle of text. All the Lorem
          Ipsum generators on the Internet tend to repeat predefined chunks as
          necessary, making this the first true generator on the Internet. It
          uses a dictionary of over 200 Latin words, combined with a handful of
          model sentence structures, to generate Lorem Ipsum which looks
          reasonable. The generated Lorem Ipsum is therefore always free from
          repetition, injected humour, or non-characteristic words etc.There are
          many variations of passages of Lorem Ipsum available, but the majority
          have suffered alteration in some form, by injected humour, or
          randomised words which don't look even slightly believable. If you are
          going to use a passage of Lorem Ipsum, you need to be sure there isn't
          anything embarrassing hidden in the middle of text. All the Lorem
          Ipsum generators on the Internet tend to repeat predefined chunks as
          necessary, making this the first true generator on the Internet. It
          uses a dictionary of over 200 Latin words, combined with a handful of
          model sentence structures, to generate Lorem Ipsum which looks
          reasonable. The generated Lorem Ipsum is therefore always free from
          repetition, injected humour, or non-characteristic words etc.There are
          many variations of passages of Lorem Ipsum available, but the majority
          have suffered alteration in some form, by injected humour, or
          randomised words which don't look even slightly believable. If you are
          going to use a passage of Lorem Ipsum, you need to be sure there isn't
          anything embarrassing hidden in the middle of text. All the Lorem
          Ipsum generators on the Internet tend to repeat predefined chunks as
          necessary, making this the first true generator on the Internet. It
          uses a dictionary of over 200 Latin words, combined with a handful of
          model sentence structures, to generate Lorem Ipsum which looks
          reasonable. The generated Lorem Ipsum is therefore always free from
          repetition, injected humour, or non-characteristic words etc.
        </p>
      </div>
    </div>
  );
};

export default ScrollBar;
