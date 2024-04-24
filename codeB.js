function pickRandomProject(projects) {
    const randomIndex = Math.floor(Math.random() * projects.length);
    return projects[randomIndex];
  }
  
  // Example usage:
  const projects = ['The Stock Market Portfolio', 'Hospital Management App ', 'Social Media Website', 'Bookstore E-commerce', 'Chat Website', 'Restaurant app', 'Real Estate Management', 'Vegetable Market Shop', 'Event Management Web App', 'Expense Tracker', 'Multi-Factor Authentication (MFA) project', 'Restaurant App', 'Address Book', 'Todo list web application', 'Car Vault app', 'Blackjack game', 'Health Tracker application', 'Text Summarizer Website', 'Notes Maker', 'Community Forum', 'fundraising application', ' Comprehensive Disaster Management System', 'blogging platform', 'Event Dashboard', ' Ticket Raising Platform', 'Exspense Management', 'Socail Ftiness', 'Travel Journal', 'Text Translation', ' Community Marketplace app', 'News Media', 'Note-taking', ' Quiz', 'Task Manager', 'Music playlist', 'Workout planner', 'Restaurant Reommendation' ];
  
  
  const randomProject = pickRandomProject(projects);
  console.log('Randomly picked project:', randomProject);