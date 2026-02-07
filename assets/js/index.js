document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  const filterTabs = Array.from(document.querySelectorAll('.filter-tab'));
  const categoryCards = Array.from(document.querySelectorAll('.category-card'));
  const SEARCH_HIGHLIGHT_CLASS = 'search-highlight';

  if (!searchInput || !filterTabs.length || !categoryCards.length) {
    return;
  }

  const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  const extractDisplayText = (linkTextElement) => {
    const clone = linkTextElement.cloneNode(true);
    clone.querySelectorAll('i').forEach((icon) => icon.remove());
    return clone.textContent.trim();
  };

  const normalizeLinkText = (linkTextElement) => {
    const plainText = extractDisplayText(linkTextElement);
    linkTextElement.innerHTML = `<i class="fas fa-external-link-alt"></i> ${plainText}`;
  };

  const highlightLinkText = (linkTextElement, searchTerm) => {
    normalizeLinkText(linkTextElement);
    if (!searchTerm) {
      return;
    }

    const regex = new RegExp(`(${escapeRegExp(searchTerm)})`, 'gi');
    linkTextElement.innerHTML = linkTextElement.innerHTML.replace(
      regex,
      `<span class="${SEARCH_HIGHLIGHT_CLASS}">$1</span>`,
    );
  };

  const getActiveFilter = () =>
    document.querySelector('.filter-tab.active')?.getAttribute('data-filter') || 'all';

  const cardMatchesFilter = (card, filterType) => {
    const cardCategory = card.getAttribute('data-category') || '';

    if (filterType === 'all') return true;
    if (filterType === 'ai') return card.classList.contains('ai-card');
    if (filterType === 'other') return card.classList.contains('other-card');

    return cardCategory.includes(filterType);
  };

  const cardMatchesSearch = (card, searchTerm) => {
    if (!searchTerm) {
      card.querySelectorAll('.link-text').forEach(normalizeLinkText);
      return true;
    }

    const cardTitle = card.querySelector('h3')?.textContent.toLowerCase() || '';
    let hasMatch = cardTitle.includes(searchTerm);

    card.querySelectorAll('a').forEach((link) => {
      const linkText = link.textContent.toLowerCase();
      const linkTextElement = link.querySelector('.link-text');

      if (!linkTextElement) return;

      if (linkText.includes(searchTerm)) {
        hasMatch = true;
        highlightLinkText(linkTextElement, searchTerm);
      } else {
        normalizeLinkText(linkTextElement);
      }
    });

    return hasMatch;
  };

  const renderCards = () => {
    const searchTerm = searchInput.value.toLowerCase().trim();
    const filterType = getActiveFilter();

    categoryCards.forEach((card) => {
      const matchesSearch = cardMatchesSearch(card, searchTerm);
      const matchesFilter = cardMatchesFilter(card, filterType);
      const shouldShow = matchesSearch && matchesFilter;

      card.style.display = shouldShow ? 'block' : 'none';
      card.style.animation = shouldShow ? 'fadeIn 0.5s ease forwards' : 'none';
    });
  };

  searchInput.addEventListener('input', renderCards);

  filterTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      filterTabs.forEach((item) => item.classList.remove('active'));
      tab.classList.add('active');
      renderCards();
    });
  });

  document.querySelectorAll('a[href^="http"]').forEach((link) => {
    const linkText = link.querySelector('.link-text');
    if (linkText) {
      normalizeLinkText(linkText);
    }
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
  });

  const updateDaysRunning = () => {
    const startDate = new Date('2016-05-01');
    const diffTime = Math.abs(Date.now() - startDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    document.querySelectorAll('[data-days-running]').forEach((element) => {
      element.textContent = diffDays;
    });
  };

  const updateAIStats = () => {
    const aiLinksCount = document.querySelectorAll('.ai-card .links-list a').length;
    const stat = document.getElementById('aiResourceCount');
    if (stat) {
      stat.textContent = aiLinksCount;
    }
  };

  updateDaysRunning();
  updateAIStats();
  renderCards();
});
