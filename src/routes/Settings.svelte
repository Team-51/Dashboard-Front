<form method="POST" enctype="multipart/form-data">
    <!-- @csrf -->
    <div class="w-full bg-white rounded-lg mx-auto mt-8 flex overflow-hidden rounded-b-none">
      <div class="w-1/3 bg-gray-100 p-8 hidden md:inline-block">
        <h2 class="font-medium text-md text-gray-700 mb-4 tracking-wide">Profile Info</h2>
        <p class="text-xs text-gray-500">Update your basic profile information such as Email Address, Name, and Image.</p>
      </div>
      <div class="md:w-2/3 w-full">
        <div class="py-8 px-16">
          <label for="name" class="text-sm text-gray-600">Username</label>
          <input class="mt-2 border-2 border-gray-200 px-3 py-2 block w-full rounded-lg text-base text-gray-900 focus:outline-none focus:border-indigo-500" type="text" value="" name="name">
        </div>
        <hr class="border-gray-200">
        <div class="py-8 px-16">
          <label for="email" class="text-sm text-gray-600">Password</label>
          <input class="mt-2 border-2 border-gray-200 px-3 py-2 block w-full rounded-lg text-base text-gray-900 focus:outline-none focus:border-indigo-500" type="email" name="email" value="">
        </div>
        <div class="py-8 px-16">
          <label for="email" class="text-sm text-gray-600">Re endter Password *</label>
          <input class="mt-2 border-2 border-gray-200 px-3 py-2 block w-full rounded-lg text-base text-gray-900 focus:outline-none focus:border-indigo-500" type="email" name="email" value="">
        </div>

      </div>

    </div>
    <div class="p-16 py-8 bg-gray-300 clearfix rounded-b-lg border-t border-gray-200">
      <p class="float-left text-xs text-gray-500 tracking-tight mt-2">Click on Save to update your Profile Info</p>
      <input type="submit" class="bg-indigo-500 text-white text-sm font-medium px-6 py-2 rounded float-right uppercase cursor-pointer" value="Save">
    </div>
  </form>