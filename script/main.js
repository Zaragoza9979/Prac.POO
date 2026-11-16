import { Movie } from './classes/Movie.js';
import { Task } from './classes/Task.js';
import { Member } from './classes/Member.js';

class Main {
  constructor() {
    this.movies = [];
    this.tasks = [];
    this.members = [];

    this.moviesContainer = document.getElementById('movies-container');
    this.tasksContainer = document.getElementById('tasks-container');
    this.teamContainer = document.getElementById('team-container');
    this.departmentFilter = document.getElementById('department-filter');
  }

  async init() {
    await Promise.all([
      this.loadMovies(),
      this.loadTasks(),
      this.loadTeam()
    ]);

    this.setupEventListeners();
    this.render();
  }

  async loadMovies() {
    const response = await fetch('../data/movies.json');
    const data = await response.json();
    this.movies = data.map(
      (item) => new Movie(item.title, item.director, item.year, item.rating)
    );
  }

  async loadTasks() {
    const response = await fetch('../data/tasks.json');
    const data = await response.json();
    this.tasks = data.map(
      (item) => new Task(item.text, item.category, item.completed)
    );
  }

  async loadTeam() {
    const response = await fetch('../data/team.json');
    const data = await response.json();
    this.members = data.map(
      (item) => new Member(item.name, item.role, item.department, item.available)
    );
  }

  setupEventListeners() {
    this.departmentFilter.addEventListener('change', (event) => {
      const selectedDepartment = event.target.value;
      this.render(selectedDepartment);
    });
  }

  render(departmentFilter = 'all') {
    // 1. Render Movies
    this.moviesContainer.innerHTML = '';
    this.movies.forEach((movie) => {
      this.moviesContainer.appendChild(movie.render());
    });

    // 2. Render Tasks
    this.tasksContainer.innerHTML = '';
    this.tasks.forEach((task) => {
      this.tasksContainer.appendChild(task.render());
    });

    // 3. Render Filtered Team Members
    this.teamContainer.innerHTML = '';
    const filteredMembers =
      departmentFilter === 'all'
        ? this.members
        : this.members.filter((member) => member.department === departmentFilter);

    filteredMembers.forEach((member) => {
      this.teamContainer.appendChild(member.render());
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const app = new Main();
  app.init();
});