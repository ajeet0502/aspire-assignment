<template>
  <div class="flex pt1 app__card">
    <div class="flex-align-items app__money">
      <span class="app__money__dollar">S$</span>
      <span class="app__money__balance">3,000</span>
    </div>
    <div class="app__new_card">
      <app-new-card @submitData="addCard" />
    </div>
  </div>
  <div class="debit__card">
    <div class="debit__tab">
      <ul>
        <li class="active">My debit cards</li>
        <li>All company cards</li>
      </ul>
    </div>
    <div class="flex ui-card debit__card_1">
      <div class="debit__card_11">
        <div
          class="flex-align-items show-card"
          v-for="item in cardData"
          :key="item.id"
          @click="cardNumber(item.cardNumber, true)"
          :class="activeSlide == 'slide_' + item.id ? 'show' : 'hide'"
        >
          <img
            src="../../assets/images/remove_red_eye-24px.svg"
            alt="remove-icon"
          />Show card number
        </div>
        <div class="card__slider">
          <div
            v-for="item in cardData"
            :key="item.id"
            class="card__sliders card__slider_1"
            :class="[
              activeSlide == 'slide_' + item.id ? 'show' : 'hide',
              { fade: item.freeze },
            ]"
          >
            <div>
              <img src="../../assets/images/logo-white.svg" alt="logo" />
              <div class="name">{{ item.name }}</div>
              <div
                class="flex-align-items card_number"
                v-if="cardHide"
                v-html="cardNumber(item.cardNumber, false)"
              ></div>
              <div
                class="flex-align-items card_number"
                v-if="!cardHide"
                v-html="cardN"
              ></div>
              <div class="flex-align-items card_details">
                {{ item.expiry }} <span>CVV:</span>
                <span class="cvv">{{ item.cvv }}</span>
              </div>
              <div class="clear visa-logo">
                <img src="../../assets/images/Visa-Logo.svg" alt="logo" />
              </div>
            </div>
          </div>
          <div class="card__slider_carosel">
            <button
              v-for="item in cardData"
              :key="item.id"
              @click="changeSlide(item.id)"
              :class="activeSlide == 'slide_' + item.id ? 'active' : ''"
            ></button>
          </div>
        </div>
        <card-action @submitfreez="cardFreeze" />
      </div>
      <div class="debit__card_12">
        <card-detail :currItem="currItem" />
        <trans-action />
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import NewCard from "@/components/card/new-card/NewCard.vue";
import Transactions from "@/components/card/transactions/Transactions.vue";
import CardDetails from "@/components/card/card-details/CardDetails.vue";
import CardAction from "@/components/card/card-action/CardAction.vue";

export default {
  name: "app",
  components: {
    "app-new-card": NewCard,
    "trans-action": Transactions,
    "card-detail": CardDetails,
    CardAction,
  },
  data() {
    return {
      activeSlide: "slide_1",
      cardHide: true,
      cardN: "",
      currItem: [],
      cardData: [
        {
          id: 1,
          name: "Mark Henry",
          cardNumber: "1234567812342020",
          cvv: "***",
          spend: "20000",
          cardLimit: "100000",
          expiry: "Thru: 12/20",
          freeze: false,
        },
        {
          id: 2,
          name: "Mark Henry",
          cardNumber: "1231212312312021",
          cvv: "***",
          spend: "30000",
          cardLimit: "200000",
          expiry: "Thru: 12/20",
          freeze: false,
        },
        {
          id: 3,
          name: "Mark Henry",
          cardNumber: "1231212312312022",
          cvv: "***",
          spend: "40000",
          cardLimit: "100000",
          expiry: "Thru: 12/20",
          freeze: false,
        },
      ],
    };
  },
  methods: {
    changeSlide(item) {
      this.cardHide = true;
      this.cardN = "";
      this.activeSlide = "slide_" + item;
      this.currItem = this.cardData.find((option) => option.id === item);
    },
    cardFreeze(val) {
      if (val == "cancel") {
        this.cardData = this.cardData.filter(
          (option) => this.currItem.id !== option.id
        );
      } else if (val == "freeze") {
        this.cardData.map((option) => {
          option.freeze = this.currItem.id === option.id ? true : false;
        });
      }
    },
    addCard(val) {
      if (val) {
        const newNumber = Math.floor(
          1000000000000000 + Math.random() * 9000000000000000
        );
        const newCard = {
          id: 4,
          name: val,
          cardNumber: newNumber.toString(),
          cvv: "***",
          spend: "40000",
          cardLimit: "100000",
          expiry: this.randomDate(new Date(2023, 0, 1), new Date()),
          freeze: false,
        };
        this.cardData.push(newCard);
      }
    },
    randomDate(start, end) {
      const date = new Date(
        start.getTime() + Math.random() * (end.getTime() - start.getTime())
      );
      return date.toDateString();
    },
    cardNumber(item, status) {
      let cardNo;
      if (this.currItem.length == 0) {
        this.currItem = this.cardData.find((option) => option.id === 1);
      }
      if (item) {
        if (status) {
          this.cardHide = !this.cardHide;
          cardNo =
            "<span>" +
            item.slice(0, 4) +
            "</span>" +
            "<span>" +
            item.slice(4, 8) +
            "</span>" +
            "<span>" +
            item.slice(8, 12) +
            "</span>" +
            "<span>" +
            item.slice(12, 16) +
            "</span>";
          this.cardN = cardNo;
        } else {
          cardNo =
            "<span>****</span>" +
            "<span>****</span>" +
            "<span>****</span>" +
            "<span>" +
            item.slice(12, 16) +
            "</span>";
          return cardNo;
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.app__money {
  font-weight: bold;

  &__dollar {
    border-radius: 4px;
    background-color: #01d167;
    font-size: 13px;
    padding: 4px 13px;
    color: white;
  }

  &__balance {
    padding-left: 13px;
    color: #222222;
    font-size: 26px;
    @media (max-width: 768px) {
      color: white;
    }
  }
}

.app__new_card {
  margin-left: auto;
}

ul {
  list-style: none;
  margin: 0;
  padding: 30px 0 20px;
  display: flex;

  li {
    display: flex;
    font-size: 14px;
    cursor: pointer;
    color: #222222;
    margin-right: 30px;
    opacity: 0.3;
    @media (max-width: 768px) {
      color: white;
    }

    &:last-child {
      margin-right: 0;
    }

    &.active {
      opacity: 1;
      font-weight: 600;
      padding-bottom: 5px;
      border-bottom: 2px solid #23cefd;
    }
  }
}

.debit__card {
  &_1 {
    padding: 60px 40px;
    @media (max-width: 768px) {
      flex-wrap: wrap;
      padding: 30px 0;
      border: 0;
      box-shadow: none;
    }
  }
  &_11 {
    width: 52%;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
  &_12 {
    width: calc(100% - 52% - 50px);
    padding-left: 50px;
    @media (max-width: 1024px) {
      width: calc(100% - 52% - 20px);
      padding-left: 20px;
    }
    @media (max-width: 768px) {
      width: -webkit-fill-available;
      background: #fff;
      margin: -30px -30px -70px;
      padding: 30px;
    }
  }
}
.card__sliders {
  display: none;
  background-color: #01d167;
  border-radius: 12px;
  padding: 25px;
  color: #ffffff;
  img {
    float: right;
    @media (max-width: 768px) {
      position: absolute;
      right: 40px;
    }
  }
  .name {
    font-size: 24px;
    font-weight: bold;
    padding: 50px 0 30px;
  }
  .card_number {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 13px;
    letter-spacing: 3.5px;
    span {
      margin-right: 25px;
      display: inline-block;
    }
  }
  .card_details {
    font-weight: bold;
    font-size: 13px;
    margin-bottom: 10px;
    span {
      margin-left: 35px;
    }
    .cvv {
      font-size: 24px;
      font-weight: bold;
      margin-left: 7px;
      position: relative;
      top: 5px;
    }
  }
  .visa-logo {
    margin-bottom: 40px;
  }
  button {
    width: 10px;
    height: 10px;
    background-color: #01d167;
  }
}
.card__slider_carosel {
  display: flex;
  justify-content: center;
  margin-top: 15px;
  button {
    width: 10px;
    height: 10px;
    background-color: #01d167;
    opacity: 0.2;
    border: none;
    box-shadow: none;
    border-radius: 8px;
    margin-right: 5px;
    &.active {
      width: 18px;
      opacity: 1;
    }
  }
}
.show {
  display: block !important;
}
.hide {
  display: none !important;
}
.show-card {
  color: #01d167;
  font-size: 12px;
  font-weight: bold;
  float: right;
  position: relative;
  top: -29px;
  @media (max-width: 768px) {
    background: #fff;
    padding: 5px;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
  }
  img {
    padding-right: 7px;
    position: relative;
    top: 4px;
  }
}
.fade {
  opacity: 0.3;
}
</style>
