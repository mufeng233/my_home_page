<template>
  <div>
    <div class="navbar bg-base-100 shadow-lg">
      <div class="flex-none">
        <label class="btn btn-square btn-ghost drawer-button" for="my-drawer">
          <svg class="inline-block w-7 h-7" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"
            />
          </svg>
        </label>
      </div>
      <div class="flex-1">
        <a class="normal-case text-2xl ml-2">沐风的秘密基地</a>
      </div>
      <div class="flex-none">
        <div class="dropdown dropdown-end">
          <label tabindex="0" class="btn btn-square btn-ghost">
            <svg class="inline-block w-7 h-7" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li><a>Item 1</a></li>
            <li><a>Item 2</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="drawer">
      <input id="my-drawer" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <div
          class="hero min-h-screen"
          style="background-image: url(https://picsum.photos/1920/1080?random)"
        >
          <div class="hero-overlay bg-opacity-60"></div>
          <div class="hero-content text-center text-neutral-content">
            <div class="max-w-md">
              <h1 class="mb-5 text-5xl font-bold">👋你好，我是沐风</h1>
              <p class="mb-5">
                我始终相信，走过平湖烟雨 岁月山河<br />
                那些历经劫数，尝遍百味的人<br />
                会更加生动而干净。
              </p>
              <button class="btn btn-primary">🔍 发现他的线索</button>
            </div>
          </div>
        </div>
      </div>
      <div class="drawer-side">
        <label for="my-drawer" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          <!-- <li class="menu-title">
            <span>Navigator</span>
          </li> -->
          <li>
            <a class="active"
              ><svg class="w-6 h-6" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12 5.69L17 10.19V18H15V12H9V18H7V10.19L12 5.69M12 3L2 12H5V20H11V14H13V20H19V12H22"
                /></svg
              >主页</a
            >
          </li>
          <li>
            <a>
              <svg class="w-6 h-6" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M10.59,13.41C11,13.8 11,14.44 10.59,14.83C10.2,15.22 9.56,15.22 9.17,14.83C7.22,12.88 7.22,9.71 9.17,7.76V7.76L12.71,4.22C14.66,2.27 17.83,2.27 19.78,4.22C21.73,6.17 21.73,9.34 19.78,11.29L18.29,12.78C18.3,11.96 18.17,11.14 17.89,10.36L18.36,9.88C19.54,8.71 19.54,6.81 18.36,5.64C17.19,4.46 15.29,4.46 14.12,5.64L10.59,9.17C9.41,10.34 9.41,12.24 10.59,13.41M13.41,9.17C13.8,8.78 14.44,8.78 14.83,9.17C16.78,11.12 16.78,14.29 14.83,16.24V16.24L11.29,19.78C9.34,21.73 6.17,21.73 4.22,19.78C2.27,17.83 2.27,14.66 4.22,12.71L5.71,11.22C5.7,12.04 5.83,12.86 6.11,13.65L5.64,14.12C4.46,15.29 4.46,17.19 5.64,18.36C6.81,19.54 8.71,19.54 9.88,18.36L13.41,14.83C14.59,13.66 14.59,11.76 13.41,10.59C13,10.2 13,9.56 13.41,9.17Z"
                />
              </svg>
              友情链接</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
