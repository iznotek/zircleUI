<template>
  <z-view>
    WELCOME TO ZIRCLE UI
  <!--    <div slot="image">
        <div class="transition" :style="style(space)">
          <img class="transition" :style="{'opacity': opacity(space, 0.9)}" :src="spotimage(space)" height="475px">
        </div>
      </div> -->

    <div slot='extension'>
      <z-spot
        :angle='45'
        to-view='docs'
        class='accent'
        label='Docs'>
        <i class='fas fa-book'></i>
      </z-spot>
      <z-spot
        button
        :angle='135'
        class='accent'
        label='Github'
        @click.native="openUrl">
        <i class='fab fa-github'></i>
      </z-spot>
    </div>
  </z-view>
</template>
