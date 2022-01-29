<template>
  <div>
    <trans-item :items="transaction.item" />
  </div>
</template>

<script>
import Trans from "@/components/card/transactions/transaction/Trans.vue";

export default {
  name: "app",
  data() {
    return {
      transaction: {
        item: [
          {
            id: 1,
            name: "Hamleys",
            date: "20 May 2020",
            amount: "+ S$ 150",
            details: "Refund on debit card",
            icon: "file-storage.svg",
            debit: false,
          },
          {
            id: 2,
            name: "Hamleys",
            date: "20 May 2020",
            amount: "- S$ 150",
            details: "Charged to debit card",
            icon: "flights.svg",
            debit: true,
          },
          {
            id: 3,
            name: "Hamleys",
            date: "20 May 2020",
            amount: "- S$ 150",
            details: "Charged to debit card",
            icon: "megaphone.svg",
            debit: true,
          },
          {
            id: 4,
            name: "Hamleys",
            date: "20 May 2020",
            amount: "- S$ 150",
            details: "Charged to debit card",
            icon: "file-storage.svg",
            debit: true,
          },
          {
            id: 5,
            name: "Hamleys",
            date: "20 May 2020",
            amount: "- S$ 150",
            details: "Charged to debit card",
            icon: "file-storage.svg",
            debit: true,
          },
        ],
      },
    };
  },
  components: {
    "trans-item": Trans,
  },
};
</script>
