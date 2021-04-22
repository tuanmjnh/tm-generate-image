<template>
  <div :class="['notification absolute flex items-center border-l-4 py-2 px-3 shadow-md mb-2',hidden?'hidden':'', cls]">
    <!-- icons -->
    <div :class="['rounded-full bg-white mr-3',clo]" v-html="ico">
    </div>
    <!-- message -->
    <div class="text-white max-w-xs" v-html="msg">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    message: { type: String, default: 'Success!' },
    classes: { type: String, default: 'bg-green-500 border-green-700' },
    color: { type: String, default: 'text-green-500' },
    icon: {
      type: String, default: `<svg width="1.8em" height="1.8em" viewBox="0 0 16 16" class="bi bi-check" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd"
              d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z" />
      </svg>` },
    timeout: { type: Number, default: 5000 }
  },
  data() {
    return {
      hidden: true,
      msg: '',
      cls: '',
      clo: '',
      ico: '',
      tot: 5000
    }
  },
  watch: {
    hidden: {
      immediate: true,
      handler(val, oldVal) {
        if (!val) {
          setTimeout(() => {
            this.hidden = true
          }, this.tot);
        }
      }
    }
  },
  created() {
    this.msg = this.message
    this.cls = this.classes
    this.clo = this.color
    this.ico = this.icon
    this.tot = this.timeout
  },
  methods: {
    show({ message, classes, color, icon, timeout }) {
      if (message) this.msg = message
      if (classes) this.cls = classes
      if (color) this.clo = color
      if (icon) this.ico = icon
      if (timeout) this.tot = timeout
      this.hidden = false
    },
    hide() {
      this.hidden = true
    }
  }
}
</script>

<style>
.notification {
  top: 6px;
  left: 318px;
  z-index: 100;
  width: 60%;
}
</style>