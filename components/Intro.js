import {useEffect, useState} from "react";

export default function Intro() {
  const [classes,setClasses] = useState('');

  useEffect(() => {
    setClasses('visible');
  }, []);

  return (
    <section id="intro" className={classes}>
      <div>
        <p> <span>Stephen Mclean</span><br />Full-stack javascript engineer.<br />I build exceptional and accessible digital experiences for the web.</p>
        <a href="">Contact me</a>
      </div>
      <div>
        <img src="/img/sm.jpg" alt=""/>
      </div>
    </section>
  );
}