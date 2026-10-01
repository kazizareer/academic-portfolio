// EDIT YOUR PORTFOLIO HERE. Replace bracketed text and set image paths, e.g. "images/portrait.jpg".
// Add your photographs to dist/images/. Leave an image value empty to show a placeholder.
window.portfolio = {
  name: '[Your full name]', initials: 'YN', role: '[Your academic title]',
  department: '[Department or research group]', university: '[University / Institution]',
  location: '[City, Country]', email: '', cv: '', scholar: '', orcid: '', github: '', portrait: '',
  introduction: '[Write a short introduction to who you are, what you study, and the questions that motivate your research.]',
  biography: '[Introduce your academic background and research journey. Describe the problems you work on, the methods you use, and what you hope your work will contribute to your field.]',
  interests: ['[Research area one]', '[Research area two]', '[Research area three]'],
  approach: '[Explain how you approach research: your methods, interdisciplinary interests, or the connection between your work and real-world challenges.]',
  education: [
    {degree:'[Doctoral / current degree]', institution:'[University name]', period:'[Start year — Present]', detail:'[Field of study, thesis topic, and supervisor. Remove this entry if it does not apply.]'},
    {degree:'[Previous degree]', institution:'[University name]', period:'[Start year — End year]', detail:'[Major, thesis title, relevant coursework, and academic distinctions.]'},
    {degree:'[Undergraduate degree]', institution:'[University name]', period:'[Start year — End year]', detail:'[Major, final-year research, and relevant academic achievements.]'}
  ],
  projects: [
    {title:'[Your research project title]', category:'[Research area]', year:'[Year]', image:'', summary:'[Introduce the research question, your role, and why the project matters in two or three sentences.]', detail:'[Describe your methodology, key findings, and contribution. Add collaborators or the laboratory where the work was completed.]', url:''},
    {title:'[Your second project title]', category:'[Research area]', year:'[Year]', image:'', summary:'[Explain the problem you investigated, the approach you took, and the main outcome.]', detail:'[Add technical details, tools, results, and what you learned from this work.]', url:''},
    {title:'[Your third project title]', category:'[Research area]', year:'[Year]', image:'', summary:'[Describe this work and highlight your individual contribution or its broader impact.]', detail:'[Add a short account of the methods, collaborators, and results.]', url:''}
  ],
  publications: [
    {title:'[Full title of your publication]', authors:'[Your name, Co-author name, Co-author name]', venue:'[Journal or conference name]', year:'[Year]', type:'Journal article', abstract:'[Add the abstract or a concise summary of the research question, methods, and main findings.]', url:''},
    {title:'[Full title of your conference paper]', authors:'[Author names in publication order]', venue:'[Conference name · Location]', year:'[Year]', type:'Conference paper', abstract:'[Summarize the contribution and explain the significance of the results.]', url:''},
    {title:'[Full title of your manuscript]', authors:'[Author names in publication order]', venue:'[Repository or intended venue]', year:'[Year]', type:'Preprint', abstract:'[Explain the work and clearly state its current publication status.]', url:''}
  ],
  certifications: [
    {title:'[Certification or training title]', issuer:'[Issuing organization]', year:'[Month, Year]', detail:'[Describe the skills, training, or assessment completed.]', image:'', url:''},
    {title:'[Workshop or professional certificate]', issuer:'[Issuing organization]', year:'[Month, Year]', detail:'[Explain the topic and its relevance to your research or professional development.]', image:'', url:''}
  ],
  awards: [
    {title:'[Award or fellowship name]', issuer:'[Awarding institution]', year:'[Year]', detail:'[Explain the recognition, selection criteria, and the work it acknowledges.]'},
    {title:'[Scholarship or academic distinction]', issuer:'[Awarding institution]', year:'[Year]', detail:'[Add a brief description of the award and its significance.]'}
  ]
};
