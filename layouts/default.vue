<template>
  <div class="container">
    <Nuxt/>
  </div>
</template>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  color: #2E495E;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.cursor--follower {
  position: fixed;
  left: 0;
  top: 0;
  background-color: currentColor;
  opacity: 0.3;
  width: 20px;
  height: 20px;
  margin-left: -10px;
  margin-top: -10px;
  border-radius: 100%;
  transition: opacity 0.2s cubic-bezier(0.75, -0.27, 0.3, 1.33),
    width 0.6s cubic-bezier(0.75, -1.27, 0.3, 2.33),
    height 0.6s cubic-bezier(0.75, -1.27, 0.3, 2.33),
    margin-top 0.6s cubic-bezier(0.75, -1.27, 0.3, 2.33),
    margin-left 0.6s cubic-bezier(0.75, -1.27, 0.3, 2.33);
  user-select: none;
  pointer-events: none;
  z-index: 99999;
  transform: translate(-20px, -20px);
  will-change: transform;
  -webkit-backface-visibility: hidden;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #00C48D;
  color: #00C48D;
  text-decoration: none;
  padding: 10px 30px;
  display: inline-flex;
  align-self: center;
}

.button--green:hover {
  color: #fff;
  background-color: #00C48D;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #2E495E;
  color: #2E495E;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #2E495E;
}
</style>
