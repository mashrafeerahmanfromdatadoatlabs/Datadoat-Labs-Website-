function openTab(event, tabId) {
  // Hide all tabs
  var tabs = document.getElementsByClassName("tab");
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].style.display = "none";
  }

  // Deactivate all tab links
  var tabLinks = document.getElementsByClassName("tab-link");
  for (var i = 0; i < tabLinks.length; i++) {
    tabLinks[i].style.fontWeight = "400";
  }

  // Show the clicked tab
  document.getElementById(tabId).style.display = "block";

  // Activate the clicked tab link
  event.currentTarget.style.fontWeight = "600";
}
