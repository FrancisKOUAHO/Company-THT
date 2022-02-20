<template>
  <footer id="footer" role="contentinfo">
    <div class="footer-container">
      <div class="enjoy">Profitez-en de manière responsable</div>
      <div class="some_icons">
        <a href="https://www.youtube.com/user/lilfaso" target="_blank"
          ><img
            src="@/assets/icon/icon-youtube.png"
            data-hover="@/assets/icon/icon-youtube.png"
            alt="icon-youtube.png"
        /></a>
        <a href="#" target="_blank"
          ><img
            src="@/assets/icon/icon-fb.png"
            data-hover="@/assets/icon/icon-fb-o.png"
            alt="icon-fb-o.png"
        /></a>
        <a href="https://www.instagram.com/ouili_desire/?hl=fr" target="_blank"
          ><img
            src="@/assets/icon/icon-instagram1.png"
            data-hover="@/assets/icon/icon-instagram-o.png"
            alt="icon-instagram-o.png"
        /></a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
#footer {
  position: fixed;
  bottom: 0px;
  width: 100%;
  padding: 16px;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.0833em;
}

.footer-container {
  display: flex;
  justify-content: space-between;
}

.enjoy {
  font-size: 14px;
}

.some_icons a img {
  width: 16px;
  height: 16px;
  margin: 0 20px;
  color: white;
}

.some_icons a img:hover {
  width: 16px;
  height: 16px;
  margin: 0 20px;
  color: #d51015;
}
</style>
