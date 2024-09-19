import React from 'react'

const Testimonals = () => {
  return (
    <section className="bg-white py-16">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Testimonials</h2>
      <div className="flex flex-wrap -mx-4">
        {/* <!-- Slider 1 --> */}
        <div className="w-full md:w-1/3 px-4 mb-8">
          <div className="bg-green-100 p-6 rounded-lg shadow-md">
            <div className="flex justify-center mb-4">
              <img
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAlAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAAMFBgcCAQj/xAA9EAABAwMCAwUFBgUCBwAAAAABAAIDBAUREiEGEzEiMkFRYQdxgZGhFCNCUrHBFTNy0fAk8RY0U2KiwuH/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIEAwX/xAAfEQACAgIDAQEBAAAAAAAAAAAAAQIRAyEEEjFBE1H/2gAMAwEAAhEDEQA/AMWbKV2JV7HTOf0TjqRzRkqO0Tp1kciRdB4K4ELl6YXgZwnoVMdDgV0EJu1PQuJ6phY8uXO0rsBNyxFw2SGeNlbnfdExiN3ko/kuafNONDx0ylQEkYGkZG6YfGGnC5ilc0YOV4+UIA8c0BDTOXUkyHJLkwOSCSn4aSWRpe1hwPFFWmgNbVNjALjnYDxWkRcORUNqLqgaX4yAVEppejUW/DJ3gtOCN1I2hoLiS1N3KMCumDempSdlgBiyQr+EfQOtf/qCMJJXEYqnBJBRzTTRtcMlES1EL3gZGE02xTYz2l4bLVZ2as76X6dk514OyzU7cYwU5zGSxYYN/RMCx1gwXR7I+nZLSMOYTn0CmVfC1f0hqiMtfuMJ5oibF4ZIXdayrqHkiAgIU0VWRvGV2jtbOMvdHXMHmkZw0ZXIoKvP8slMcl5mETsgg4K6EbO3VBd0wMLpjjqG/iPcpGhtsRcNbdXvVqt9qieGt5EZB8CwLlLMonaHHlL6UoEEaXAgjqQEzMx0fXGFoNdwpDNEXMiMD8bOb0+IVUudrmpXmnnHeGWvHQ+qcMkZ+E5MUoekCdynWx9lEm3yMi1uC8ggkewuwcDZdPTlYZw5cXW6rEuOh64VgvnFUlfCIYCWjxKBsPDVZdqd8tKzLWkjod1uXCXDVsqODaSjrrdAPuAypZJGATJ+J3nk9QVwyLafWy4y1VnzfI0ucXHJJ81MWohkO53TF1pW0lyq6ZudEU8jGZ6locQD8gEOZJo4wIo3EegWn4cvo3cSTVOKSFlc9zyXAg+q8U2UXeK8UwG7G49yPpr1RahrjZhXzi/hOiis8zxBG3SwnICwqSBzR2d/QFZZ8WK+nfHypS+Glm92xzQOW1CT3O2v6Rt+SzkBzThznA+RKLpIOZkl/wD5Lj+EY7s7/rKWqLdJWW/wY35J6ClM8RliopHRjq4M2VOpoHG6wwkuIc7GMr6fsFnpYbXHE1g0hgGAFpx4k1dmfJladUYpTw08xA0Ab4VFkiDayaV3jK/HzW/cY8M0tosV0vNriayvp4jLE7GoNIO50nbOMrB9L6hoJ7b3kuPhkkoqUfSouMtoKo66kY9uuZjfTqr/AMPwCaNtRFIxzfPyVWsULpIZorhFCIwzsgtwQfLp9VK8DP5styp5HF8cbTyvAH3rlkiqtGjHJ3TLe2rpnRlhngkwcENeDhVnjS1c2n+0RN7LGnceCjqHkOvEsc1lgkxnJB3B+JHVWn7OZ7O+mijkbzMBkUhyWAncZ8R1UwShJMMjcotFT4gtL7fRNLmdlwxlRNmoxNb3nbvlaP7Q2Mm4chqGMLA9zXaT1AI6Kg8PShtve0/mK3wSPNlJs0X2TMY20PYWDUJng7eq0cBgpHZZ5qnex+GKSySyOxrM7/1WgzQtfC5mw2QyUj5d42A/4ouekADnkbKwcHWujrKUfaO9jyVe4zAbxLcWg5xUOH1V09n1pllghlO0bhlZeW6xemjjK5lO4jtlNT3WSNndAHgvVaOL7AW3gljstdGDn5pLJHPr02PErNVr3wXN32ecNdGW5LT4hPUlkstDTltNR00QI1ENaAq3x6MWoyQSuhlb3HxnSWlYLNf74aqaGe6VL+3vmQ7la8+GUpNrww4ZLqkz6GorfaJ7tJyoacyE4mIAz7ipqostohpnaKOnYD1wwDZfN1DJVxStqYauaObrrY4g5UpUcQ394Ifd6o5GCMjp8lijxnFNadmuUraadUK/01LTcdOgt4HLbNs1pyGuI6fNbbZqqsit0YeNw0dViHBkDZOK6AzdrMjiSfE6St+cGihGk+HgtuPtFKKM2SnK2RdwupraepoZ9OieJ0Tt+gcML5+gjmt1zZS3BhjniOHtI8c/Ueq2iewS1VTJKauRoJ2AWWe0eklt3FIL3OfmCN8b3+OCQV3nG1sjDkqVBl9u0MVJogaNR2cQOiK9nxpcVUprI2uHUHx9FUHQvndSffxlkwGS/IDTnfOFe+HuD3NpOeP4cYng7itLHZ26grO8a60bo5ZdrLRE+nfNCJHRt5nckG7SfIFE1kUPPETHNkBwTvgDBBVRqX1dLUuonRukpAC10jZuYw7fhOM5C8ZVyR1tNzHkudIMj0A/vhcVj3Rc8tRbJn2hOkNiZG1pDGEH6YWYWuctgc0HbJWq8bVMctlMWd3DIWM0s2ljseZW3G3WzzHTZq3swvklFSyxaS5plJGPetBuHFIjt8j+TIHaTg4WQ+zytZGe34uP6rR7q+OW0yEeLSuGTkdJdRqFqzDb3UOqbpUyu6vlcT8StR4JuIZaISO9GzBasnuJ/wBbNn/qH9VZ+Gb8KVnIcN8YV8nF+mNHTj5Okg/iriCR92OBgBgH6pKq8Q1fMuTnZ6tCSzrjRrw0vOyWuHG1RW0phOPTKpBZM+rdK4d45TLJixw1I91Q3lZA3WuUpGaEI0HwSPDB2sYTj5XH8SgxWPyu21Lyd1z/ADkde8SxWSrdRXilqXOwI35z8CFqsXGsfJDHcvPoVhv2s+HVcGslB2cQPenBOycijRvcfGNMPBmP6lQPavdae5/YOWGc5hc7IOcNIG3zA29FSxdnQx4Y/XIenkP7p+qikmtluqTqdzWPa53/AHBxP6H6LvJtIzwgrObU1tWw0r36XtOqMlXvh1l7a6JhlpzC0fzCckD09VnLaeeN7XM1McOhVqstDeqpo5VXHCzHUgk4XGaX9NeKUl4i3XWqYZYKSlGtwycHx9SoC086XjF1NVZ0xhoaCMbEB2fjlWCjt8Vto5ameV0krm6pZpPIb/AIHiSrgtfF9sqpoiCLXTGbT131/UDCWBJt0Tyr6q/pI+0KB1PaC9p7o2WTQxuMRctY49r6et4bMtLPHLGRkOY7KzSjMf2MZ8lpoxx8JvgiJ8hjwOzr3+a3nk07LMWcphZo8QDnZY/7NBTlg5p6uOPmtDv1eKWyyaKjQzQRjUuc+P32NZVHRg960Mu1Y2I5YKh4b7tRRdupteJcnIHgoereHVUpG+ZCfqpq0yEQO38FfXVDT3ZC3aUmtcCegASQlxdmtkz1yklRVjLmlx7IJPkAuXPeOyQQfVW3gu3w1bnumxnPihuLKOCGpPKxkeSdasXbdFbZ1ToXjAA9uQOqcDMbISsbkNOLidktJIy4k+iJZEFzKNDcqlFIltsG07bLRvZ9RMvvDtbaXAc4ZfTk/hkbuB8QSPiqCYg0beKuvs1dWU0VdV0mA+B7NJcNgXDY/RKSsIugc07ZIh2cPb1BG4VgsE0sEHIkLeUDqyU5crdUVUktwhg7bxmphAw5rz1cGj8J67dMlV+gElfdYreKllM2VxaZX7huM9cf7LHPHJ6N8MsUuxZZKt3EN5oeH6PJjkkBqXj8g3IUN7RKl0/GdzBxiJzYWAdA1rQFdaXhqfgmd1XaJmVVTy9c8k7chzc9wY7o3G439VmvE1aLhfrjV6S3mzlwaTnHotOLH0RjzZP0lZFvc9oc1r3Br+8Adihi1zGlrHYHknBnUfckRldjkF2avqaNuhjiBnZO3O51U0ZEk0jh5F2yjNJ8EdStFVSSsk77M6T54TsXVEPk5Cm7dFOacujbluFBHZ2PJafwnZ46qyySuByG7KRmV1eTUyau9ndeom9R8u6VDPyu/ZeqSrHrPcpKEkNPX16LisklrJHPeSclDRx5cFKOjEVI+UjujK5SyVSOkcd2yFc7TKPRFDvH3oE75PUouN+QzPiF2XhzYQBsm6huqNzfMdV086cL3OVRJyztRtd5hX72WStmbd7Y47z0/MaPVmR/7BUGEYjLfyuI/wA+asvs/rfsPE9E8nDZH8l3qHgtH1IQBstnZDcLJTTzABwjw/HXI2KH4c4etdfPPeKqnLzMHwRB22YwdyT6ke/byTtgBp6W8Qt6QVEmj4tDv3RdrmFFwZbyNnSwagfV+T+6TQIavc7P4DcKs9lnRo8mMXz+JDKzmu6vJcfjutl9otV/DfZ5M0ntSxiPbzdgLGGbQtHkmAmjOUgN17H3V6wZcUALSiLcSyJ5b1cXY+OUy52lpd5Bd0ztLWgeASGQ78hxB6jK3HgfDOGXnbuLFLhGWVkmB3u181oHD97fTWJ8Izu3CBMoN/Oq9VjvOT9gkhrhJza6d/m9JSMNpaVznB3gjb87kWxjGjHNcAfhunaEtEQyoniGobNVsjBP3bMEeR/zCzdbyI1dqxsj4xldOOkD0dleMG2QlMeytZlDJnAxhw6LyI9gEobmaoQ3PvT7HfdjCBDkf8148CAURTSup3idmdcTmyNx5tIP7IQOxKzyOyJZ1cPNpCYH0FY5Wz0tfUxYLaycFhB2ILGD+6dugEXDlFFDsGRtYweW2yrvsurW1XCtJEMaqZ7437+Xd+hCmawmXh+jqRLpAgjeB4d0ZHqgRSPbVcWut1ptzHHLvvntB8ANI/U/JZ50iaPRGccXR92vhkcdm6Ym48A3/wCkoM90BAzphw3C6acZTQcFxLLp8UDPZZNwPMpyJ4wo+SXMnino5D4DKQE1TwR1G7gC4KZjibHQODQq3T1LqftOOztvcpX+I5o3eWFLAqFV/wAzL/UUk3M/VK93m4pIAmKWbDAMqGnfzZ3yZzqcUU2TRG4+QQbFEFuzpN6SOw3G4zjzC9kBczIOV1GunNB3C6nMFaeyQiIXZj9QhnbOK7hdgpAEyHsgjwOUdG7Lg4dCo4u7JyiqN+qFoP4dkwNC9j9wEVfcbc4jD4ucwerTg/Qj5Kx8SXFtFwZb42v3NMxxAO+NKy7hi5fwriSlqtWlnN5cn9L+yf1z8FOca3V0tJQ0WSOVAxhz5NH+ypElLqXmSqYXdc5PvRpOAo1p1VYR7zspGeZQ9RIM48k447IKckzYHkEDO2syc5RMLT+Y4TTN8BEsGAgByYYhafJwT3MxSn3LhoD2Fp6FPmnaac4d4JMCuE7ndep91MA47pJUApD905MRpJJQKkPNXfgkkrJA394r2PqkkkA7nZP0BOZB7l4kgByXvu/zwRN0qJKiSN8h35LOnuykkmhEZAf9RlSDzskkhAMuKGl/mg+iSSBj0feCIBSSQA6wn6J7J5BSSQwIo9SvUkkgP//Z"
                alt="Testimonial"
                className="w-[100px] h-[100px] rounded-full"
              />
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">John Doe</h3>
            <p className="text-gray-600 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
               aliqua.
            </p>
          </div>
        </div>
        {/* <!-- Slider 2 --> */}
        <div className="w-full md:w-1/3 px-4 mb-8">
          <div className="bg-green-100 p-6 rounded-lg shadow-md">
            <div className="flex justify-center mb-4">
              <img
                src="data:image/jpeg;base64,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"
                alt="Testimonial"
                className="w-[100px] h-[100px] rounded-full"
              />
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">John Doe</h3>
            <p className="text-gray-600 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            aliqua.
            </p>
          </div>
        </div>
        {/* <!-- Slider 3 --> */}
        <div className="w-full md:w-1/3 px-4 mb-8">
          <div className="bg-green-100 p-6 rounded-lg shadow-md">
            <div className="flex justify-center mb-4">
              <img
                src="data:image/jpeg;base64,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"
                alt="Testimonial"
                className="w-[100px] h-[100px] rounded-full"
              />
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">John Doe</h3>
            <p className="text-gray-600 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            aliqua.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  )
}

export default Testimonals