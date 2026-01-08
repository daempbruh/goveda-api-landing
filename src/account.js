import './style.css'
import './account.css'

// Account Settings Logic (Mock)
document.addEventListener('DOMContentLoaded', () => {

    // Sidebar navigation mock
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    const contentTitle = document.querySelector('.settings-header h1');
    const contentDesc = document.querySelector('.settings-header p');

    // Define mock content for sections
    const contentMap = {
        'Billing & Plans': {
            title: 'Billing & Plans',
            desc: 'Manage your subscription and payment methods.',
            html: `
                <div class="settings-section">
                    <div class="credit-box" style="text-align: left; display: flex; justify-content: space-between; align-items: center;">
                        <div>
                            <div style="font-size: 0.9rem; color: var(--text-scnd);">Current Plan</div>
                            <div style="font-size: 1.25rem; font-weight: 700; color: var(--text-main);">Pro Plan</div>
                        </div>
                        <button class="btn btn-outline" style="background: white;">Upgrade</button>
                    </div>

                    <h3 class="section-title">Credit Usage (This Month)</h3>
                    <table class="usage-table">
                        <thead>
                            <tr>
                                <th>Source</th>
                                <th>Usage</th>
                                <th style="text-align: right;">Credits</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div class="usage-source">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                            <line x1="3" y1="9" x2="21" y2="9"></line>
                                            <line x1="9" y1="21" x2="9" y2="9"></line>
                                        </svg>
                                        Web Platform
                                    </div>
                                </td>
                                <td>
                                    <div style="display: flex; align-items: center; gap: 8px;">
                                        <div class="usage-bar-bg">
                                            <div class="usage-bar-fill" style="width: 45%;"></div>
                                        </div>
                                        <span style="font-size: 0.85rem; color: var(--text-scnd);">45%</span>
                                    </div>
                                </td>
                                <td style="text-align: right; font-weight: 600;">450</td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="usage-source">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                            <polyline points="16 18 22 12 16 6"></polyline>
                                            <polyline points="8 6 2 12 8 18"></polyline>
                                        </svg>
                                        API Access
                                    </div>
                                </td>
                                <td>
                                    <div style="display: flex; align-items: center; gap: 8px;">
                                        <div class="usage-bar-bg">
                                            <div class="usage-bar-fill" style="width: 25%;"></div>
                                        </div>
                                        <span style="font-size: 0.85rem; color: var(--text-scnd);">25%</span>
                                    </div>
                                </td>
                                <td style="text-align: right; font-weight: 600;">250</td>
                            </tr>
                            <tr style="background: #fafafa;">
                                <td style="font-weight: 600;">Total</td>
                                <td></td>
                                <td style="text-align: right; font-weight: 700; color: var(--primary);">700 / 1,000</td>
                            </tr>
                        </tbody>
                    </table>
                    
                    <h3 class="section-title">Payment Method</h3>
                    <div class="form-group" style="display: flex; align-items: center; gap: 12px; padding: 16px; border: 1px solid var(--border); border-radius: 8px;">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                             <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                             <line x1="1" y1="10" x2="23" y2="10"></line>
                        </svg>
                        <span style="font-weight: 500;">•••• •••• •••• 4242</span>
                        <span style="color: var(--text-scnd); font-size: 0.9rem; margin-left: auto;">Expires 12/28</span>
                    </div>
                     <button class="btn btn-primary" style="margin-top: 16px;">Update Payment Method</button>
                </div>
            `
        },
        'API Keys': {
            title: 'API Keys',
            desc: 'Manage your API keys for accessing the Goveda API.',
            html: `
                <div class="settings-section">
                    <div class="api-key-box">
                        <div>
                            <div style="color: #64748b; font-size: 0.8rem; margin-bottom: 4px;">Production Key</div>
                            <div class="key-value">sk_live_51Mx...892z</div>
                        </div>
                        <button class="copy-btn">Copy</button>
                    </div>
                     <div class="api-key-box">
                        <div>
                            <div style="color: #64748b; font-size: 0.8rem; margin-bottom: 4px;">Test Key</div>
                            <div class="key-value">sk_test_42Tr...115x</div>
                        </div>
                        <button class="copy-btn">Copy</button>
                    </div>
                    <button class="btn btn-primary">Roll Key</button>
                </div>
            `
        },
        'Notifications': {
            title: 'Notifications',
            desc: 'Choose what updates you want to receive.',
            html: `
                <div class="settings-section">
                    <div style="margin-bottom: 20px;">
                        <label style="display: flex; gap: 12px; align-items: center; margin-bottom: 12px; cursor: pointer;">
                            <input type="checkbox" checked style="width: 18px; height: 18px;">
                            <span style="font-weight: 500;">Weekly Usage Report</span>
                        </label>
                         <label style="display: flex; gap: 12px; align-items: center; margin-bottom: 12px; cursor: pointer;">
                            <input type="checkbox" checked style="width: 18px; height: 18px;">
                            <span style="font-weight: 500;">Product Updates</span>
                        </label>
                         <label style="display: flex; gap: 12px; align-items: center; margin-bottom: 12px; cursor: pointer;">
                            <input type="checkbox" style="width: 18px; height: 18px;">
                            <span style="font-weight: 500;">Marketing Emails</span>
                        </label>
                    </div>
                     <button class="btn btn-primary">Save Preferences</button>
                </div>
             `
        }
    };

    // Store original "General" HTML
    const mainContent = document.querySelector('.account-content');
    const generalHTML = Array.from(mainContent.children).slice(2).map(el => el.outerHTML).join('');
    contentMap['General'] = {
        title: 'General Settings',
        desc: 'Manage your account details and profile information.',
        html: generalHTML
    };

    sidebarLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            // Remove active class
            sidebarLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            // Update content
            const sectionName = link.textContent.trim();
            const data = contentMap[sectionName] || contentMap['General'];

            contentTitle.textContent = data.title;
            contentDesc.textContent = data.desc;

            // Remove old content (everything after header)
            while (mainContent.children.length > 1) {
                mainContent.removeChild(mainContent.lastChild);
            }

            // Add new content
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = data.html;
            while (tempDiv.firstChild) {
                mainContent.appendChild(tempDiv.firstChild);
            }
        });
    });

});
