# Bot Battlr - React App

This is a mini web app built with React that fetches data from a local server running JSON DB server. The app consists of two main components: `BotCollection` and `YourBotArmy`. In `BotCollection`, you can see profiles of all available bots and add them to your army. In `YourBotArmy`, you can view the bots enlisted in your army and release or discharge them.

## Project Setup

Follow these steps to set up and run the project:

1. Clone this repository to your local machine.

2. Install the required dependencies by running the following command in the project root directory:

```bash
npm install
```

3. Start the JSON DB server by running:

```bash
json-server --watch db.json --port 8001
```

4. Run the React app by executing:

```bash
npm start
```

This will launch the application in your default web browser, typically at `http://localhost:3000`.

## Features

As a user, you can perform the following actions in the application:

1. View Profiles: On the main page (`BotCollection`), you can see profiles of all available bots, including their name, health, damage, armor, bot class, catchphrase, and avatar image.

2. Enlist a Bot: To add a bot to your army, simply click on it in the `BotCollection`. The selected bot will render in the `YourBotArmy` component. Remember, a bot can be enlisted only once.

3. Release a Bot: If you wish to remove a bot from your army, click on it in the `YourBotArmy` section. The bot will disappear from your army but remain in the `BotCollection`.

4. Discharge a Bot: To permanently delete a bot from both the backend and your army, click the red button marked "x" on the bot in the `YourBotArmy` component.

## API Endpoints

The application fetches data from the following API endpoints:

### GET /bots

Returns an array of bot objects with the following properties:

- `id`: Bot ID
- `name`: Bot name
- `health`: Bot health points
- `damage`: Bot damage points
- `armor`: Bot armor points
- `bot_class`: Bot class (e.g., Support, Medic, etc.)
- `catchphrase`: Bot's catchphrase
- `avatar_url`: URL of the bot's avatar image
- `created_at`: Timestamp of bot creation
- `updated_at`: Timestamp of last bot update

Example Response:

```json
[
  {
    "id": 101,
    "name": "wHz-93",
    "health": 94,
    "damage": 20,
    "armor": 63,
    "bot_class": "Support",
    "catchphrase": "1010010101001101100011000111101",
    "avatar_url": "https://robohash.org/nostrumrepellendustenetur.png?size=300x300&set=set1",
    "created_at": "2018-10-02T19:55:10.800Z",
    "updated_at": "2018-10-02T19:55:10.800Z"
  },
  {
    "id": 102,
    "name": "RyM-66",
    "health": 86,
    "damage": 36,
    "armor": 77,
    "bot_class": "Medic",
    "catchphrase": "0110011100000100011110100110011000011001",
    "avatar_url": "https://robohash.org/quidemconsequaturaut.png?size=300x300&set=set1",
    "created_at": "2018-10-02T19:55:10.827Z",
    "updated_at": "2018-10-02T19:55:10.827Z"
  }
]
```

### DELETE /bots/:id

Deletes the bot with the specified `id`.

Example Response:

```json
{}
```
