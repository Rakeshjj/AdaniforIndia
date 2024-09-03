
document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.nav-tab');
    const panes = document.querySelectorAll('.tabs-container .pane');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.getAttribute('data-tab');

            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            panes.forEach(pane => {
                if (pane.id === target) {
                    pane.classList.add('active');
                } else {
                    pane.classList.remove('active');
                }
            });
        });
    });

    // Set default active tab
    document.querySelector('.nav-tab[data-tab="tab1"]').click();
});

document.querySelectorAll('.nav-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.pane').forEach(p => p.classList.remove('active'));

        tab.classList.add('active');
        document.getElementById(tab.getAttribute('data-tab')).classList.add('active');
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('#carouselExampleFade');
    const relatedContent = document.getElementById('relatedContent');

    const content = {
        content1: `
                <div class="row" style="margin-top: 31px;" id="conatent">
                    <div class="col-md-4">
                        <div class="card" style="width: 100%;    height: 22rem;" id="adaniannual">
                            <img src="assets/adani1.jpg" class="card-img-top" id="cardimage" alt="Adani Annual Report 2024">
                            <div class="card-body">
                                <h5 class="card-title">Adani Annual Report</h5>
                                <p class="card-text">This is the 2024 Annual Report of Adani Group. <br> <a href="https://www.adanienterprises.com/-/media/Project/Enterprises/Investors/Investor-Downloads/Annual-Report/AEL-FY24.pdf" target="_blank" style="    text-decoration: none;">Know more</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card" style="width: 100%;    height: 22rem;" id="adaniannual1">
                            <img src="assets/adani2.jpg" class="card-img-top" alt="AR FY24" id="cardimage" >
                            <div class="card-body" style="    height: 8.5rem;">
                                <h5 class="card-title">ARFY24</h5>
                                <p class="card-text">This is the ARFY24 report of Adani Group.
                                <br>
                                <a href="https://www.adanipower.com/newsroom/media-releases/adani-power-announces-q4-fy24-results" target="_blank" style="    text-decoration: none;">Know more</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                 <div class="card" style="width: 100%; height: 22rem;" id="adaniannual1">
                     <img src="assets/adani3.jpg" class="card-img-top" alt="Q1 FY25" id="cardimage">
                        <div class="card-body" style="height: 8.5rem;">
                          <h5 class="card-title">Q1FY25</h5>
                            <p class="card-text">
                                This is the Q1FY25 report of Adani Group. 
                                <br>
                             <a href="https://www.adanigas.com/newsroom/media-release/Adani-Total-Gas-Q1FY25-Results" target="_blank" style="text-decoration: none;">Know more</a>
                           </p>
                      </div>
                 </div>
               </div>

                </div>`,
        content2: `
                <div class="row" style="margin-top: 31px;" id="conatent">
                    <div class="col-md-4">
                        <div class="card" style="width: 100%;    height: 22rem;" id="adaniannual">
                            <img src="assets/adani5.jpg" class="card-img-top" alt="Adani Annual Report 2024" id="cardimage">
                            <div class="card-body">
                                <h5 class="card-title">Adani Annual Report</h5>
                                <p class="card-text">This is the 2024 Annual Report of Adani Group. <br> <a href="path-to-adani-annual-report-2024.pdf" target="_blank" style="    text-decoration: none;">Know more</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card" style="width: 100%;    height: 22rem;" id="adaniannual1">
                            <img src="assets/adani8.webp" class="card-img-top" alt="AR FY24" id="cardimage" >
                            <div class="card-body">
                                <h5 class="card-title">ARFY24</h5>
                                <p class="card-text">This is the ARFY24 report of Adani Group. <br> <a href="path-to-arfy24.pdf" target="_blank" style="    text-decoration: none;">Know more</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card" style="width: 100%;    height: 22rem;" id="adaniannual1">
                            <img src="assets/adani9.webp" class="card-img-top" alt="Q1 FY25" id="cardimage" >
                            <div class="card-body">
                                <h5 class="card-title">Q1FY25</h5>
                                <p class="card-text">This is the Q1FY25 report of Adani Group. <br> <a href="path-to-q1fy25.pdf" target="_blank" style="    text-decoration: none;">Know more</a></p>
                            </div>
                        </div>
                    </div>
                </div>`,
        content3: `
                <div class="row" style="margin-top: 31px;" id="conatent">
                    <div class="col-md-4">
                        <div class="card card-box" style="width: 100%;    height: 22rem;" id="adaniannual">
                            <img src="assets/adani10.jpg" class="card-img-top" alt="Adani Annual Report 2024" id="cardimage">
                            <div class="card-body">
                                <h5 class="card-title">Adani Annual Report</h5>
                                <p class="card-text">This is the 2024 Annual Report of Adani Group. <br> <a href="path-to-adani-annual-report-2024.pdf" target="_blank" style="    text-decoration: none;">Know more</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card card-box" style="width: 100%;    height: 22rem;" id="adaniannual1">
                            <img src="assets/adani12.jpg" class="card-img-top" alt="AR FY24" id="cardimage">
                            <div class="card-body">
                                <h5 class="card-title">ARFY24</h5>
                                <p class="card-text">This is the ARFY24 report of Adani Group. <br> <a href="path-to-arfy24.pdf" target="_blank" style="    text-decoration: none;">Know more</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card card-box" style="width: 100%;    height: 22rem;" id="adaniannual1">
                            <img src="assets/adani2.jpg" class="card-img-top" alt="Q1 FY25" id="cardimage">
                            <div class="card-body">
                                <h5 class="card-title">Q1FY25</h5>
                                <p class="card-text">This is the Q1FY25 report of Adani Group. <br> <a href="path-to-q1fy25.pdf" target="_blank" style="    text-decoration: none;">Know more</a></p>
                            </div>
                        </div>
                    </div>
                </div>`
    };

    function updateContent(contentId) {
        relatedContent.innerHTML = content[contentId] || '<p>No content available.</p>';
    }

    function handleSlideChange() {
        const activeImage = document.querySelector('.carousel-item.active img');
        if (activeImage) {
            const contentId = activeImage.getAttribute('data-content');
            updateContent(contentId);
        }
    }

    // Initialize content based on the active carousel item
    handleSlideChange();

    // Update content on slide change
    carousel.addEventListener('slid.bs.carousel', handleSlideChange);
});




// document.addEventListener('DOMContentLoaded', () => {
//     const carousel = document.querySelector('#carouselExampleFade');
//     const relatedContent = document.getElementById('relatedContent');

//     const content = {
//         content1: `
//                 <div class="row" style="margin-top: 34px;">
//                     <div class="col-md-4">
//                         <div class="card" style="width: 100%;">
//                             <img src="assets/blog2.jpg" class="card-img-top" alt="Related Image 1-1">
//                             <div class="card-body">
//                                 <h5 class="card-title">Card 1</h5>
//                                 <p class="card-text">Description for Card 1.</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="col-md-4">
//                         <div class="card" style="width: 100%;">
//                             <img src="assets/blog3.jpg" class="card-img-top" alt="Related Image 1-2">
//                             <div class="card-body">
//                                 <h5 class="card-title">Card 2</h5>
//                                 <p class="card-text">Description for Card 2.</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="col-md-4">
//                         <div class="card" style="width: 100%;">
//                             <img src="assets/blog4.jpg" class="card-img-top" alt="Related Image 1-3">
//                             <div class="card-body">
//                                 <h5 class="card-title">Card 3</h5>
//                                 <p class="card-text">Description for Card 3.</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>`,
//         content2: `
//                 <div class="row" style="margin-top: 34px;">
//                     <div class="col-md-4">
//                         <div class="card" style="width: 100%;">
//                             <img src="assets/image1.jpg" class="card-img-top" alt="Related Image 2-1">
//                             <div class="card-body">
//                                 <h5 class="card-title">Card 1</h5>
//                                 <p class="card-text">Description for Card 1.</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="col-md-4">
//                         <div class="card" style="width: 100%;">
//                             <img src="assets/image2.jpg" class="card-img-top" alt="Related Image 2-2">
//                             <div class="card-body">
//                                 <h5 class="card-title">Card 2</h5>
//                                 <p class="card-text">Description for Card 2.</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="col-md-4">
//                         <div class="card" style="width: 100%;">
//                             <img src="assets/image3.jpg" class="card-img-top" alt="Related Image 2-3">
//                             <div class="card-body">
//                                 <h5 class="card-title">Card 3</h5>
//                                 <p class="card-text">Description for Card 3.</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>`,
//         content3: `
//                 <div class="row" style="margin-top: 34px;">
//                     <div class="col-md-4">
//                         <div class="card" style="width: 100%;">
//                             <img src="assets/blog-details1.jpg" class="card-img-top" alt="Related Image 3-1">
//                             <div class="card-body">
//                                 <h5 class="card-title">Card 1</h5>
//                                 <p class="card-text">Description for Card 1.</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="col-md-4">
//                         <div class="card" style="width: 100%;">
//                             <img src="assets/image4.jpg" class="card-img-top" alt="Related Image 3-2">
//                             <div class="card-body">
//                                 <h5 class="card-title">Card 2</h5>
//                                 <p class="card-text">Description for Card 2.</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="col-md-4">
//                         <div class="card" style="width: 100%;">
//                             <img src="assets/image5.jpg" class="card-img-top" alt="Related Image 3-3">
//                             <div class="card-body">
//                                 <h5 class="card-title">Card 3</h5>
//                                 <p class="card-text">Description for Card 3.</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>`
//     };

//     function updateContent(contentId) {
//         relatedContent.innerHTML = content[contentId] || '<p>No content available.</p>';
//     }

//     function handleSlideChange() {
//         const activeImage = document.querySelector('.carousel-item.active img');
//         if (activeImage) {
//             const contentId = activeImage.getAttribute('data-content');
//             updateContent(contentId);
//         }
//     }

//     // Initialize content based on the active carousel item
//     handleSlideChange();

//     // Update content on slide change
//     carousel.addEventListener('slid.bs.carousel', handleSlideChange);
// });

