<template>
  <div class="card__head">
    <div class="flex-align-items ui-card-head" @click="toggleCard">
      <img
        class="icon"
        src="../../../../assets/images/troup11889.svg"
        alt="transaction-icon"
      />
      Recent transactions
      <img
        class="arrow-down"
        :class="{ 'arrow-up': !toggle }"
        src="../../../../assets/images/down-arrow.svg"
        alt="down-arrow"
      />
    </div>
    <div class="ui-card-body" :class="{ show: toggle }">
      <div
        class="flex-align-items ui-card-items"
        v-for="item in items"
        :key="item.id"
      >
        <div>
          <span class="business icon" :class="'icon_' + item.id">
            <img :src="getImgUrl(item.icon)" />
          </span>
        </div>
        <div class="ui-card-inner">
          <div class="name">
            {{ item.name }}
            <span class="amount" :class="{ credit: !item.debit }">
              {{ item.amount }}
              <img src="../../../../assets/images/next.svg" alt="next-icon" />
            </span>
          </div>
          <div class="dates">{{ item.date }}</div>
          <div class="flex-align-items details">
            <span class="business finance">
              <img src="../../../../assets/images/business-and-finance.svg" />
            </span>
            <span>{{ item.details }}</span>
          </div>
        </div>
      </div>
      <div class="card_footer">View all card transactions</div>
    </div>
  </div>
</template>
<script>
var images = require.context("../../../../assets/images/", false, /\.svg$/);
export default {
  props: ["items"],
  data() {
    return {
      toggle: true,
    };
  },
  methods: {
    getImgUrl(pic) {
      return images("./" + pic);
    },
    toggleCard() {
      this.toggle = !this.toggle;
    },
  },
};
</script>
<style scoped lang="scss">
.business {
  background-color: #325baf;
  width: 24px;
  height: 20px;
  border-radius: 50%;
  &.icon {
    padding: 15px 16px;
    background-color: #009dff1a;
    margin-right: 12px;
  }
  &.icon_2 {
    background-color: #00d6b51a;
  }
  &.icon_3 {
    background-color: #f251951a;
  }
  &.finance {
    height: 24px;
    margin-right: 7px;
    img {
      margin-left: 7px;
      margin-top: 7px;
    }
  }
}
.name {
  font-size: 14px;
  color: #222222;
  font-weight: 600;
  display: flex;
}
.dates {
  color: #aaaaaa;
  font-size: 13px;
}
.details {
  color: #325baf;
  font-size: 12px;
  font-weight: 600;
  margin-top: 10px;
}
.card_footer {
  color: #01d167;
  background-color: #edfff5;
  padding: 15px;
  text-align: center;
  cursor: pointer;
}
.ui-card {
  &-body {
    display: none;
    cursor: pointer;

    &.show {
      display: block;
    }
  }
  &-head {
    padding: 24px;
    font-size: 14px;
    color: #0c365a;
    cursor: pointer;

    .icon {
      padding-right: 12px;
    }

    .arrow-down {
      margin-left: auto;
    }

    .arrow-up {
      transform: rotate(180deg);
    }
  }
  &-items {
    padding: 24px 0 14px;
    margin: 0 24px;
    border-bottom: 1px solid #f5f5f5;
  }
  &-inner {
    width: 100%;
    .amount {
      margin-left: auto;
      font-size: 14px;
      font-weight: bold;
      img {
        margin-left: 7px;
      }
    }
    .credit {
      color: #01d167;
    }
  }
}
</style>
