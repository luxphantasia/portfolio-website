// paradyse portfolio | interactive functionality

// Commission status data (will be connected to live data later)
const commissionData = {
  status: 'open', // open, closed, limited
  activeCommissions: 3,
  estimatedWait: '1-2 weeks',
  lastUpdated: new Date().toISOString(),
};

// Update commission status on page load
document.addEventListener('DOMContentLoaded', () => {
  updateCommissionStatus();
  updateStatusDate();
});

function updateCommissionStatus() {
  const statusEl = document.querySelector('.status-text-mini');
  const activeCountEl = document.getElementById('active-count');
  const waitTimeEl = document.getElementById('wait-time');
  const indicatorEl = document.querySelector('.status-indicator-mini');

  if (!statusEl || !activeCountEl || !waitTimeEl || !indicatorEl) return;

  // Set status text
  const statusLabels = {
    open: 'Open for Commissions',
    limited: 'Limited Availability',
    closed: 'Closed for Commissions',
  };

  statusEl.textContent = statusLabels[commissionData.status] || 'Open for Commissions';
  
  // Update indicator color
  indicatorEl.classList.remove('status-open', 'status-warning', 'status-closed');
  if (commissionData.status === 'open') {
    indicatorEl.classList.add('status-open');
  } else if (commissionData.status === 'limited') {
    indicatorEl.classList.add('status-warning');
  } else {
    indicatorEl.classList.add('status-closed');
  }

  // Update counts
  activeCountEl.textContent = commissionData.activeCommissions.toString();
  waitTimeEl.textContent = commissionData.estimatedWait;
}

function updateStatusDate() {
  const dateEl = document.getElementById('status-date');
  if (dateEl) {
    const date = new Date(commissionData.lastUpdated);
    dateEl.textContent = date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  }
}

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  });
});

// Add scroll effect to navbar
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 50) {
    navbar.style.background = 'rgba(10, 10, 10, 0.95)';
  } else {
    navbar.style.background = 'rgba(10, 10, 10, 0.9)';
  }
  
  lastScroll = currentScroll;
});

// Image Modal Functions
function openModal(imageSrc, title, description) {
  const modal = document.getElementById('image-modal');
  const modalImage = document.getElementById('modal-image');
  const modalTitle = document.getElementById('modal-title');
  const modalDescription = document.getElementById('modal-description');

  if (!modal || !modalImage || !modalTitle || !modalDescription) return;

  modalImage.src = imageSrc;
  modalTitle.textContent = title;
  modalDescription.textContent = description;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal(event) {
  if (event) {
    event.stopPropagation();
  }
  const modal = document.getElementById('image-modal');
  if (!modal) return;

  modal.classList.remove('active');
  document.body.style.overflow = '';
}

// Add fade-in animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px',
};

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Apply fade-in to sections
document.querySelectorAll('.section').forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(20px)';
  section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  fadeObserver.observe(section);
});

// Console easter egg
console.log('%cparadyse portfolio', 'font-size: 24px; font-weight: bold; color: #7c7c7c;');
console.log('%cBuilt with ☕ and late nights.', 'font-size: 12px; color: #666;');
console.log('%cInterested in working together? DM me on Discord.', 'font-size: 12px; color: #666;');

// Active Commissions Data - Sorted by Priority
// Priority order: 1) Bulk/Confirmed, 2) In Progress, 3) Normal
const activeCommissions = [
  // 💜 TOP PRIORITY — Bulk Order (7 Survivors done, 4 Killers remaining)
  {
    client: 'Kenton',
    project: 'Bulk Order — 4 Killers Remaining',
    rate: 600,
    deadline: null,
    payment: 'Partial Payment Received',
    notes: '7 of 11 characters completed — 4 Killers left in queue',
    partner: true,
    topPriority: true
  },
  // 🟡 IN PROGRESS (Easter Commissions)
  {
    client: 'Combat Warriors',
    project: 'Sea Beast Bunny',
    rate: 200,
    deadline: null,
    payment: 'After',
    notes: 'Easter Commission — Pending details',
    partner: false
  },
  // ⚪ NORMAL PRIORITY (UGC Bundle — Prepaid)
  {
    client: 'Kenton',
    project: 'UGC Bundle — 4 Items (Jester Neck, Smile Mask, Emo Fedora, Emo Swordpack)',
    rate: 240,
    deadline: null,
    payment: 'Prepaid',
    notes: '4 UGC commissions bundled — All prepaid',
    partner: true,
    bundle: true
  }
];

// Commissions Modal Functions
function openCommissionsModal() {
  const modal = document.getElementById('commissions-modal');
  const gridEl = document.getElementById('commissions-grid');
  const totalEl = document.getElementById('commissions-total-amount');
  
  if (!modal || !gridEl || !totalEl) return;
  
  // Populate commissions grid (already sorted by priority in array)
  gridEl.innerHTML = activeCommissions.map(comm => {
    const hasDeadline = comm.deadline !== null;
    const deadlineObj = comm.deadline ? new Date(comm.deadline) : null;
    // Mark urgent if flagged OR due within 48 hours
    const isUrgent = (comm.urgent) || (hasDeadline && deadlineObj.getTime() - Date.now() < 48 * 60 * 60 * 1000);
    const deadlineDisplay = hasDeadline
      ? deadlineObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
      : '—';
    const partnerBadge = comm.partner 
      ? `<span class="partner-badge">Partner</span>`
      : '';
    const royaltyBadge = comm.royalty 
      ? `<span class="royalty-badge">Royalty</span>`
      : '';
    
    return `
      <div class="commission-card${isUrgent ? ' urgent' : ''}">
        <div class="commission-card-header">
          <span class="commission-client">${comm.client}${partnerBadge}${royaltyBadge}</span>
        </div>
        <div class="commission-project">${comm.project}</div>
        <div class="commission-meta">
          <div class="commission-meta-row">
            <span class="commission-meta-label">Payment</span>
            <span class="commission-meta-value payment">${comm.payment}</span>
          </div>
          <div class="commission-meta-row">
            <span class="commission-meta-label">Deadline</span>
            <span class="commission-meta-value${isUrgent ? ' deadline' : ''}">${deadlineDisplay}</span>
          </div>
        </div>
      </div>
    `;
  }).join('');
  
  // Hide total section (not needed anymore)
  const totalSection = document.querySelector('.commissions-total');
  if (totalSection) {
    totalSection.style.display = 'none';
  }
  
  // Show modal
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCommissionsModal(event) {
  if (event) {
    event.stopPropagation();
  }
  const modal = document.getElementById('commissions-modal');
  if (!modal) return;
  
  modal.classList.remove('active');
  document.body.style.overflow = '';
}
