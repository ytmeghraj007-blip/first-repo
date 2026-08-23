     let main = document.querySelector("main");
     const box1 = document.querySelector(".box1")
     const box2 = document.querySelector(".box2")
     const box3 = document.querySelector(".box3")

     // class box add
     box1.classList.add("box");
     box2.classList.add("box");
     box2.style.backgroundColor = "yellow";
     box3.classList.add("box");
     box3.style.backgroundColor = "blue";

     // append
    main.append(box1,box2);

    // main before
   box1.before(box2)

   // replace
   main.replaceChild(box3,box1);