export class Task {
  constructor(text, category, completed = false) {
    this.text = text;
    this.category = category;
    this.completed = completed;
  }

  render() {
    const item = document.createElement('div');
    item.style.display = 'flex';
    item.style.justifyContent = 'space-between';
    item.style.alignItems = 'center';
    item.style.background = '#ffffff';
    item.style.border = '1px solid #ccc';
    item.style.padding = '0.75rem 1rem';
    item.style.borderRadius = '6px';

    const textSpan = document.createElement('span');
    textSpan.textContent = `${this.text} [${this.category}]`;
    
    if (this.completed) {
      textSpan.style.textDecoration = 'line-through';
      textSpan.style.color = '#888';
    }

    const completeBtn = document.createElement('button');
    completeBtn.textContent = this.completed ? 'Completed' : 'Complete';
    completeBtn.disabled = this.completed;
    completeBtn.style.padding = '0.4rem 0.8rem';
    completeBtn.style.cursor = this.completed ? 'not-allowed' : 'pointer';
    completeBtn.style.backgroundColor = this.completed ? '#ccc' : '#007bff';
    completeBtn.style.color = '#fff';
    completeBtn.style.border = 'none';
    completeBtn.style.borderRadius = '4px';

    completeBtn.addEventListener('click', () => {
      this.completed = true;
      textSpan.style.textDecoration = 'line-through';
      textSpan.style.color = '#888';
      completeBtn.textContent = 'Completed';
      completeBtn.disabled = true;
      completeBtn.style.backgroundColor = '#ccc';
      completeBtn.style.cursor = 'not-allowed';
    });

    item.append(textSpan, completeBtn);
    return item;
  }
}