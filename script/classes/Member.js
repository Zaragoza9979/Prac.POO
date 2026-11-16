export class Member {
  constructor(name, role, department, available) {
    this.name = name;
    this.role = role;
    this.department = department;
    this.available = available;
  }

  render() {
    const card = document.createElement('article');
    card.style.background = '#ffffff';
    card.style.border = '1px solid #ccc';
    card.style.padding = '1rem';
    card.style.borderRadius = '6px';

    const statusColor = this.available ? 'green' : 'red';
    const statusText = this.available ? 'Available' : 'Busy';

    card.innerHTML = `
      <h3 style="margin: 0 0 0.5rem 0;">${this.name}</h3>
      <p style="margin: 0.2rem 0;"><strong>Role:</strong> ${this.role}</p>
      <p style="margin: 0.2rem 0;"><strong>Department:</strong> ${this.department}</p>
      <p style="margin: 0.5rem 0 0 0; color: ${statusColor}; font-weight: bold;">${statusText}</p>
    `;

    return card;
  }
}