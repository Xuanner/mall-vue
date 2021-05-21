import BackTop from 'components/content/backTop/BackTop'

export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isShowBackTop: false
    }
  },
  methods: {
    backTop() {
      this.$refs.content.scrollTo(0,0);
    },
    showBackTop(scrollTop, top) {
      this.isShowBackTop = (scrollTop > top) ? true : false;
    }
  }
}