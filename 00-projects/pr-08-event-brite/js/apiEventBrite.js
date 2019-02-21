export default class APIEventBrite {

  static TOKEN() {
    return 'KTOWQXTLSSVU5FLLDSX3';
  }

  static URL() {
    return 'https://www.eventbriteapi.com/v3';
  }

  /**
   * Obtiene las categorías de eventos
   */
  static async getCategories() {
    const result = await fetch(`${this.URL()}/categories/?token=${this.TOKEN()}`);
    return result.json();
  }

  static async getEvents(event, catId) {
    const result =
      await fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${event}&sort_by=date&categories=${catId}&token=${this.TOKEN()}`);
    return result.json();
  }

}
