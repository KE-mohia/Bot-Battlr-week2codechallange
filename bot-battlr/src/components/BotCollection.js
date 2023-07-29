import React from "react";
import BotCollectionCard from "./BotCollectionCard";

// This component renders the collection of bots that can be enlisted in the army
function BotCollection({ bots, enlistBot }) {
    return (
      <div>
        {/* Map through the bots array and render a BotCollectionCard for each bot */}
        <div className="bot-list">
          {bots.map((bot) => (
            <BotCollectionCard
              key={bot.id}
              id={bot.id}
              avatar_url={bot.avatar_url}
              name={bot.name}
              catchphrase={bot.catchphrase}
              health={bot.health}
              damage={bot.damage}
              armor={bot.armor}
              enlistBot={enlistBot}
            />
          ))}
        </div>
      </div>
    );
  }
  
  export default BotCollection;