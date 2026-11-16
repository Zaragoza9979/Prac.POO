export class Movie {
  constructor(title, director, year, rating) {
    this.title = title;
    this.director = director;
    this.year = year;
    this.rating = rating;
  }

  render() {
    const card = document.createElement('article');
    const isTopRated = this.rating >= 8;

    card.style.border = isTopRated ? '2px solid gold' : '1px solid #ccc';
    card.style.backgroundColor = isTopRated ? '#fffdf0' : '#ffffff';
    card.style.padding = '1rem';
    card.style.borderRadius = '6px';

    card.innerHTML = `
      ${isTopRated ? '<span style="background: gold; color: #333; font-size: 0.75rem; font-weight: bold; padding: 0.2rem 0.4rem; border-radius: 3px; display: inline-block; margin-bottom: 0.5rem;">★ Top Rated</span>' : ''}
      <h3 style="margin: 0 0 0.5rem 0;">${this.title} (${this.year})</h3>
      <p style="margin: 0.2rem 0;"><strong>Director:</strong> ${this.director}</p>
      <p style="margin: 0.2rem 0;"><strong>Rating:</strong> ${this.rating} / 10</p>
    `;

    return card;
  }
}





