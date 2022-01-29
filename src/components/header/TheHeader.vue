<template>
  <header class="header">
    <div class="header__logo">
      <router-link to="/"><img src="../../assets/images/Logo.svg" alt="Aspire"></router-link>
    </div>
    <div class="header__logo-desc">
      Trusted way of banking for 3,000+ SMEs and startups in Singapore
    </div>
    <nav class="header__main-nav">
      <ul>
        <li><router-link to="/home"><img src="../../assets/images/Home.svg" alt="home-icon">Home</router-link></li>
        <li class="active"><router-link to="/"><img src="../../assets/images/Card.svg" alt="Cards-icon">Cards</router-link></li>
        <li><router-link to="/payments"><img src="../../assets/images/Payments.svg" alt="payments-icon">Payments</router-link></li>
        <li><router-link to="/credit"><img src="../../assets/images/Credit.svg" alt="Credit-icon">Credit</router-link></li>
        <li><router-link to="/settings"><img src="../../assets/images/Account.svg" alt="Settings-icon">Settings</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped lang="scss">
.header {
  text-align: left;
  padding: 50px;
  height: 100vh;
  color: #fff;
  &__logo-desc {
    font-size: 15px;
    opacity: .3;
    padding-top: 15px;
  }
  &__main-nav {
    padding-top: 70px;
  }
}


a {
  text-decoration: none;
  color: white;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  li a{
    display: flex;
    font-size: 16px;
    padding-bottom: 60px;
    cursor: pointer;
    img {
      padding-right: 15px;
    }
  }
  li.active a{
    color:#01D167;
    font-weight: bold;
  }
  li:last-child a{
    padding-bottom: 0;
  }
}

</style>