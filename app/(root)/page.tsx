import TotalBalanceBox from '@/components/TotalBalanceBox'
import HeaderBox from '@/components/HeaderBox'
import React from 'react'
import RightSidebar from '@/components/RightSidebar'

const Home = () => {
  const loggedIn = { firstName: 'John', lastName: "Doe", email: "contact@jsmatery.pro" }
  return (
    <section className='home '>
      <div className='home-content no-scrollbar'>
        <header className='home-header '>
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and manage your account and transactions efficiently."

          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />

        </header>
      </div>
       {/* Recent trnsactions */}
       <RightSidebar
          user={loggedIn}
          transactions={[]}
          banks={[{currentBalance: 123.50}, {currentBalance: 500.50}]}
        />
    </section>
  )
}

export default Home