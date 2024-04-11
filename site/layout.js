function toggleSubcategories(category) {
    var subcategory = category.getElementsByClassName('subcategory')[0];
    if (subcategory.style.display === 'none' || subcategory.style.display === '') {
      subcategory.style.display = 'block';
    } else {
      subcategory.style.display = 'none';
    }
  }

function openTab(tabName) {
  var tabContent = document.getElementById(tabName);
  
  var isTabOpen = tabContent.style.display === "block";
  
  var tabs = document.getElementsByClassName("tab-content");
  for (var i = 0; i < tabs.length; i++) {
      tabs[i].style.display = "none";
  }

  var allTabs = document.querySelectorAll('.tab');
  allTabs.forEach(function(tab) {
      tab.classList.remove('selected');
  });
  if (isTabOpen) return;
  document.querySelector('[onclick="openTab(\'' + tabName + '\')"]').classList.add('selected');
  tabContent.style.display = "block";
}
  