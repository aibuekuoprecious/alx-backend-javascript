/**
 * Represents the controller for the application.
 */
class AppController {
  static getHomepage(_, res) {
      res.status(200).send('Hello Holberton School!');
  }
}

module.exports = AppController;
