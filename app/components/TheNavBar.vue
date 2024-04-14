<template>
  <section class="mx-auto">
    <div class="drawer">
      <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col mx-auto h-24 md:w-full md:px-12">
        <div class="navbar p-0 w-full h-20 items-center">
          <div class="flex-none xl:hidden">
            <label
              for="my-drawer-3"
              aria-label="open sidebar"
              class="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-10 h-10 mt-2.5 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>

          <div class="flex-1 px-2 mx-2 h-16">
            <a class="btn btn-ghost text-xl">
              <img
                src="/images/vueschool-nav-logo.svg"
                alt="Vue School logo"
                class="mb-1"
              />
            </a>
          </div>

          <div class="hidden md:flex xl:hidden">
            <button class="btn btn-ghost text-white">Log in</button>
            <button class="btn btn-outline text-primary">Sign up</button>
          </div>

          <div class="flex-none hidden xl:flex items-center">
            <ul class="menu menu-horizontal">
              <li class="grid items-center">
                <ul class="menu menu-horizontal px-1">
                  <li>
                    <details>
                      <summary>Courses</summary>
                      <ul class="p-2 bg-base-100 rounded-t-none">
                        <li><a>Link 1</a></li>
                        <li><a>Link 2</a></li>
                      </ul>
                    </details>
                  </li>

                  <li><a>Plans</a></li>

                  <li>
                    <details>
                      <summary>Business Service</summary>
                      <ul class="p-2 bg-base-100 rounded-t-none">
                        <li><a>Link 1</a></li>
                        <li><a>Link 2</a></li>
                      </ul>
                    </details>
                  </li>

                  <li><a>Learning Paths</a></li>

                  <li><a>Hiring</a></li>

                  <li><a>Articles</a></li>

                  <li>
                    <details>
                      <summary>Events</summary>
                      <ul class="p-2 bg-base-100 rounded-t-none">
                        <li><a>Link 1</a></li>
                        <li><a>Link 2</a></li>
                      </ul>
                    </details>
                  </li>

                  <li><a>Get Certified</a></li>
                </ul>
              </li>

              <li>
                <div class="flex">
                  <button class="btn btn-ghost text-white">Log in</button>
                  <button class="btn btn-outline text-primary">Sign up</button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="drawer-side">
        <label
          for="my-drawer-3"
          aria-label="close sidebar"
          class="drawer-overlay"
        ></label>

        <ul class="menu p-4 w-80 min-h-full bg-base-200">
          <!-- Sidebar content here -->
          <li>
            <!-- Change to accordion? -->
            <ul class="menu menu-horizontal grid px-1">
              <ul class="menu bg-base-200 w-56 rounded-box">
                <li>
                  <a>Courses</a>
                  <ul>
                    <li><a>Course 1</a></li>
                    <li><a>Course 2</a></li>
                  </ul>
                </li>

                <li><a>Plans</a></li>

                <li>
                  <a>Business Service</a>
                  <ul>
                    <li><a>Service 1</a></li>
                    <li><a>Service 2</a></li>
                  </ul>
                </li>

                <li><a>Learning Paths</a></li>

                <li><a>Hiring</a></li>

                <li><a>Articles</a></li>

                <li>
                  <a>Events</a>
                  <ul>
                    <li><a>Event 1</a></li>
                    <li><a>Event 2</a></li>
                  </ul>
                </li>

                <li><a>Get Certified</a></li>
              </ul>
              <!-- <li>
                <details>
                  <summary>Courses</summary>
                  <ul class="p-2 bg-base-100 rounded-t-none">
                    <li><a>Link 1</a></li>
                    <li><a>Link 2</a></li>
                  </ul>
                </details>
              </li>

              <li><a>Plans</a></li>

              <li>
                <details>
                  <summary>Business Service</summary>
                  <ul class="p-2 bg-base-100 rounded-t-none">
                    <li><a>Link 1</a></li>
                    <li><a>Link 2</a></li>
                  </ul>
                </details>
              </li>

              <li><a>Learning Paths</a></li>

              <li><a>Hiring</a></li>

              <li><a>Articles</a></li>

              <li>
                <details>
                  <summary>Events</summary>
                  <ul class="p-2 bg-base-100 rounded-t-none">
                    <li><a>Link 1</a></li>
                    <li><a>Link 2</a></li>
                  </ul>
                </details>
              </li>

              <li><a>Get Certified</a></li> -->
            </ul>
          </li>
          <li>
            <button class="btn btn-ghost text-white">Log in</button>
            <button class="btn btn-outline text-primary">Sign up</button>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
