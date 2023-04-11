function toggleAccordion(title, panel) {
  let findTitle = document.querySelector(title);
  let findPanel = document.querySelector(panel);

  findTitle.onclick = () => {
    findPanel.classList.toggle("panels");
  };
}

toggleAccordion("#acc1", "#panel1");
toggleAccordion("#acc2", "#panel2");
toggleAccordion("#acc3", "#panel3");
toggleAccordion("#acc4", "#panel4");
toggleAccordion("#acc5", "#panel5");
toggleAccordion("#acc6", "#panel6");
