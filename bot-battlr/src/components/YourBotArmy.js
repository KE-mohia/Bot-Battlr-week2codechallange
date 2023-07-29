import React from 'react';
import YourBotArmyCard from './YourBotArmyCard';

function YourBotArmy({ enlistedBots, releaseBot,dischargeBot }) {
    // Render the list of enlisted bots as YourBotArmyCards
    return (
    <div>
      <div className="bot-list" style={{ background: "#66FF00" }}>
        {enlistedBots.map((bot) => {
          return (
            <YourBotArmyCard
              key={bot.id}
              id={bot.id}
              avatar_url={bot.avatar_url}
              name={bot.name}
              catchphrase={bot.catchphrase}
              health={bot.health}
              damage={bot.damage}
              armor={bot.armor}
              releaseBot={releaseBot}
              dischargeBot={dischargeBot}
            />
          );
        })}
      </div>
    </div>
  );
}

export default YourBotArmy;