let clickUpgrades = [
    {
        name: 'Chain',
        price: 5,
        quantity: 0,
        damage: 2
    },
    {
        name: 'Stun Gun',
        price: 50,
        quantity: 0,
        damage: 10
    }
]

let autoUpgrades = [
    {
        name: 'Butcher Knife',
        price: 100,
        quantity: 0,
        damage: 20
    },
    {
        name: 'Bone Saw',
        price: 1000,
        quantity: 0,
        damage: 40
    }
]

let bacon = 0
let power = 1
let auto = 0

// disableButton()

function mineBacon() {
    bacon++


    mineUpgrades()
    drawBacon()
    drawPower()
    // disableButton()
}

function drawBacon() {

    const collectedElement = document.getElementById('bacon')
    collectedElement.innerText = bacon

}

function minePower(powerName) {
    const powerElement = clickUpgrades.find(click => click.name == powerName)
    power += ((powerElement.damage * powerElement.quantity) + 1)

    drawPower()
}

function drawPower() {

    const collectedElement = document.getElementById('power')
    collectedElement.innerText = power
}

function mineAutoPower(powerName) {
    const powerElement = autoUpgrades.find(click => click.name == powerName)
    auto += (powerElement.damage * powerElement.quantity)

    drawAutoPower()
}

function drawAutoPower() {

    const collectedElement = document.getElementById('auto power')
    collectedElement.innerText = auto
}

function mineUpgrades() {
    clickUpgrades.forEach(click => {
        bacon += (click.damage * click.quantity)

    })
}

function mineAutoUpgrades() {
    autoUpgrades.forEach(click => {
        bacon += (click.damage * click.quantity)
    })


}

function buyUpgrade(upgradeName) {
    const purchaseElement = clickUpgrades.find(upgrade => upgrade.name == upgradeName)

    if (purchaseElement.price <= bacon) {
        purchaseElement.quantity++
        bacon -= purchaseElement.price
        purchaseElement.price *= 2
    }
    chainPurchased()
    stunGunPurchased()
    drawBacon()
}

function buyAutoUpgrade(upgradeName) {
    const purchaseElement = autoUpgrades.find(upgrade => upgrade.name == upgradeName)

    if (purchaseElement.price <= bacon) {
        purchaseElement.quantity++
        bacon -= purchaseElement.price
        purchaseElement.price *= 2
    }

    knifePurchased()
    boneSawPurchased()
    drawBacon()
}



function chainPurchased() {
    const chain = clickUpgrades.find(upgrade => upgrade.name == 'Chain')
    const upgradeElement = document.getElementById('chain')
    upgradeElement.innerText = `Chain's: ${chain.quantity}`
}
function stunGunPurchased() {
    const gun = clickUpgrades.find(upgrade => upgrade.name == 'Stun Gun')
    const upgradeElement = document.getElementById('stun gun')
    upgradeElement.innerText = `Stun Gun's: ${gun.quantity}`
}
function knifePurchased() {
    const knife = autoUpgrades.find(upgrade => upgrade.name == 'Butcher Knife')
    const upgradeElement = document.getElementById('knife')
    upgradeElement.innerText = `Knive's: ${knife.quantity}`
}
function boneSawPurchased() {
    const saw = autoUpgrades.find(upgrade => upgrade.name == 'Bone Saw')
    const upgradeElement = document.getElementById('bonesaw')
    upgradeElement.innerText = `Chain's: ${saw.quantity}`
}


function chainClickInfo() {
    const weaponlvl = clickUpgrades.find(weapon => weapon.name == 'Chain')
    const upgradeElement = document.getElementById('chain click')
    upgradeElement.innerHTML = `${weaponlvl.name} price: ${weaponlvl.price} dmg: ${weaponlvl.damage * weaponlvl.quantity}`
}

function gunClickInfo() {
    const weaponlvl = clickUpgrades.find(weapon => weapon.name == 'Stun Gun')
    const upgradeElement = document.getElementById('gun click')
    upgradeElement.innerHTML = `${weaponlvl.name} price: ${weaponlvl.price} dmg: ${weaponlvl.damage * weaponlvl.quantity}`
}

function knifeClickInfo() {
    const weaponlvl = autoUpgrades.find(weapon => weapon.name == 'Butcher Knife')
    const upgradeElement = document.getElementById('knife click')
    upgradeElement.innerHTML = `${weaponlvl.name} price: ${weaponlvl.price} dmg: ${weaponlvl.damage * weaponlvl.quantity}`
}

function sawClickInfo() {
    const weaponlvl = autoUpgrades.find(weapon => weapon.name == 'Bone Saw')
    const upgradeElement = document.getElementById('saw click')
    upgradeElement.innerHTML = `${weaponlvl.name} price: ${weaponlvl.price} dmg: ${weaponlvl.damage * weaponlvl.quantity}`
}

// TODO I think this should work...? Won't enable button correctly

// function disableButton() {
//     const disableBTN = clickUpgrades.find(click => click.name == 'Chain')

//     if (bacon < disableBTN.price) {
//         document.getElementById('chain click').disabled = true
//     }


// }

setInterval(mineAutoUpgrades, 1000)

